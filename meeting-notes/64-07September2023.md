# AMA Session with Tony Ivanov (PicoStack)

07-09-2023

## Important Links

- PicoStack Repo: https://github.com/telamon/picostack
- DecentLabs: https://decentlabs.se/

## Notes

- AMA Sessions Intro
- PicoStack Intro
  - Blockchain game comparison
    - heavy super nodes (50GB+...)
    - global consensus
    - monochain
  - Introducing picofeed
    - smaller blocks
    - the goal is to run on a phone
    - nodes <--> phones
    - each peer has their own feed
    - each peer has their own chain
    - no concept of a wallet
    - no coins :wave: 
    - signature-based / block belongs to author
    - smartphone limitations & context
      - eg: android 4GB
    - we don't need to verify everything (no token)
    - garbage collector came into picture
    - monochain are good at accounting, bad at anything else that is free (everything costs)
    - picostack is bad at accounting (tradeoffs)
    - very good at not-paying any additional content
    - zoom into a node
      - new block enters / process / output
      - picorepo is the main block storage
      - blocks contains information
      - picostore (it was the first version, available on npm)
        - redux like interface
        - reducers & input-consensus
        - output-consensus
        - made a test chap app (ttl=3hours)
          - that was a hack to release memory
        - manual handroll state
        - garbage rules become quite complex
        - rethinking this part :warning: 
    - **WHAT'S NEW**
      - PicoCPU
        - automatic garbage collection :cool: 
        - part of picostack 2.0 (in progress)
        - "a way to remember & a way to forget"
        - all about timers
- **Q&A**
  - multiple towers / multiple chains
    - hypercore is the exception
  - Picorepo stores one or multiple picofeeds?
    - up to developers
  - Can you talk about use-cases? Users… motivation… context… adversarial situations?
    - use cases
      - anything that is ok with ephemeral states
      - development of P2P games. Live, state stored outside,
    - motivation
      - upset about web turned all about money
      - blockchain et all with coins has similar problems (power + coins)
    - adversarial situations
      - chaos
      - each app has their own swarm instead of relying on 1 big global chain
  - Are they from the same or many authors? / Does one author have one or many picofeeds?(related to picostore)
    - yes. your repo is going to contain many stores (depends on input consensus)
  - spam prevention
    - low incentives (no coins)
    - right a good input consensus
  - Is a picorepo the main database of an app? or is one "picorepo" shared between many apps?
    - no, picorepo is the main db of an app. Every app has their own set of storages. 
  - so picofeed is similar to hypercore? and picorepo is similar to corestore?
    - yes, same relationship
    - main difference is on input consensus
  - Does pico work similar to hypercore (is it replacement for the hypercore?) or does it use the hypercore underneath? 
    - no
    - picofeed has other tradeoffs for flexibility
  - What does it use to replicate? DHTs?
    - using hyperswarm now
    - goal wasnt to create custom transport
  - Could this be used 100% offline… setup/use/teardown? 
    - yes, of course
    - goal is to run on really small devices
    - bluetooth devices goal