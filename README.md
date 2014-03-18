# Scimitar

Reconnoiter check viewing console, more precisely the embryo thereof. Currently
it only shows the status of your checks: what was the last run time, how it 
went, how long it took etc.

## Installation

### 1. Reconnoiter setup

You need to have Reconnoiter running, stratcon passing checks to IEP and IEP 
must be spitting check status events out back into the queue. Currently, only
RabbitMQ over AMQP is supported.

The IEP has to contain these queries (shipped default with Reconnoiter):

    <queries master="iep">
      <statement id="6cc613a4-7f9c-11de-973f-db7e8ccb2e5c" provides="CheckDetails-ddl">
        <epl>create window CheckDetails.std:unique(uuid).win:keepall() as NoitCheck</epl>
      </statement>
      <statement id="76598f5e-7f9c-11de-9f5b-ebb4dcb2494e" provides="CheckDetails">
        <requires>CheckDetails-ddl</requires>
        <epl>insert into CheckDetails select * from NoitCheck</epl>
      </statement>
      <statement id="ba189f08-7f99-11de-9013-733772d37479" provides="UnavailableStream">
        <requires>CheckDetails</requires>
        <epl>insert into UnavailableStream
             select p.* as delta, cds.target as target, cds.module as module,
                    cds.name as name, p.s.uuid as uuid
             from pattern [ every
                            s=NoitStatus(availability='A') ->
                            ( n0 = NoitStatus(uuid=s.uuid, availability='U')
                              and not NoitStatus(uuid=s.uuid, availability='A'))
                          ].std:lastevent() as p
             inner join CheckDetails as cds on cds.uuid = p.s.uuid
        </epl>
      </statement>
      <query id="ce6bf8d2-3dd7-11de-a45c-a7df160cba9e" topic="status">
        <epl>select * from NoitStatus</epl>
      </query>
    </queries>

### 2. Node.js

Scimitar runs in node.js and requires some modules, installed by npm. I am
sure you know how to get node.js and npm for your platform.
 
### 3. Scimitar

Clone the Scimitar repository somewhere, for example into /opt/scimitar. The
configuration can be placed into config.json file in this directory. The
defaults are in defaults.json. Do not change this file. If you want to change
any config values, put them into config.json, with the same structure.

Example:
If you want to change the host where your queue resides at, create a config.json
file like this:

    { 
      "amqp": { 
        "host": "rabbitmq" 
      } 
    }

## Running

All that is necessary is to run:

    cd /opt/scimitar
    npm install
    node scimitar

If you want to run this in production, you will require some more sophisticated
method to start. For RHEL 6, you are covered. In the util sub-directory there
is an upstart script. You just need to copy this to /etc/init and run:

  start node-scimitar
  
For other systems, you are on your own, but I am sure there is a way to run
resilient node.js apps for any platform.

After you succeed in launching the app, point your browser to http://yourhost:1339
and the interface should come up. 

# License

Copyright (C) 2012 Michal Taborsky

Permission is hereby granted, free of charge, to any person obtaining a copy of 
this software and associated documentation files (the "Software"), to deal in 
the Software without restriction, including without limitation the rights to 
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Author(s)

  * Michal Taborsky <michal@taborsky.cz>
  * you?

# What's with the name?

If you can believe it, here is what Wikipedia says:

> FV107 Scimitar is an armoured reconnaissance vehicle (sometimes classed as a 
light tank) used by the British Army. It is very similar to the FV101 Scorpion 
but mounts a high velocity 30 mm L21 RARDEN cannon instead of a 76 mm gun. It 
was issued to Royal Armoured Corps, Armoured Regiments in the Reconnaissance 
role. Each Regiment had a Close Reconnaissance Squadron of 5 Troops of 8 FV107 
Scimitar.