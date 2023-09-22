# AMA Session with James (HOP Protocol)

14-09-2023

## Important Links

- HOP Protocol Site: https://www.healthscience.network/
- BentoBox-DS Site: https://bentobox-ds.gitbook.io/bentobox-ds-hop/

## Notes

- AMA session intro
- HOP protocol motivation
  - motivated by bitcoin and similar projects
  - wikipedia also a motivation for this project
  - bentobox comes in, like the GUI for the protocol
  - hyperspace/holepunch came along, huge infra for P2P communications.
- BentoBox / Updates
  - BeeBee AI assistant
  - Bento Spaces, drag and drop dashboards
  - **WIP**: HQB (hot query builder)
    - interfaces into HOP
  - HOP based on entity component system
    - different systems coexist
    - DML
    - proof of work
    - machine learning with P2P / proof-of-work
  - New user interface
    - chat interface
    - bento-spaces / custom dashboards
  - tension between 1st alpha and current approach
  - HOP query builder is the new approach, lightweight more flexible query builder
- in conversation with holepunch about AI machine learning and P2P
- mostly james working solo
- Questions
  - is bentobox local first?
    - YES
    - trying to go more PWA (need to do more research)
    - you can compile to desktop app (electron-based)
    - balance btw desktop and browser
  - wearable devices
    - using 2 wearable devices most of the time
    - some wearable devices need to signup from time to time
    - then you can query the device
    - move the data to an hyperdrive and go p2p from there
    - internet requirement varies from device to device
    - lot of work on UX improvements for non-tech users
  - can i use the "HOP query builder" from javascript and if so, how does it look like and what can it do as a language?
    -  brand new / in-progress
    -  eventually will be an npm package
    -  there will be some demos
  - Is the job of P2P in your system there to split the computation between the peers? Or are peers also exchanging their personal data with each other?
    - first foundation is local-first
    - you own your data / share public library
    - replicate your data / share libraries
    - pull wearable contract
    - you can share your sqllite file, ad-hoc data, different flavours
    - PART 2 is machine learning & P2P
      - some data requirements from the network
      - locally the peers do the work
      - then peers find a way to share the conclusions securely
      - some paper docs on the work too
      - building a proof of concept
    -  proof of work checks
      - its hard
      - hash comparison / master hash of proof of work
  - Do you store each data as a log in the hypercore/ Doesn't hypercore already give you a merkle tree?
    - using hyperbee as ledger
    - still learning all the different details from hyper-stack
    - probably can re-use the hypercore merkle tree
  - Project Funding
    - self-funded
    - matt muligan is james hero
    - coherencestream.com
    - trying to get some funding from bitcoing VCs
    - micropayments interest
  - In salvador preparing a talk for november :rocket:
  - El Salvador impressions
    - quite shocking experience (security-wise)
    - super friendly people
    - in terms of tech, super early stage scene
    - wanted to start a meetup
  - P2P funding in the bitcoin community
    - its a challenge
    - holepunch is one of the few projects that has some funding from the bitcoin community
      - he has been working on this for many many years
    - optimistic to find the people that can fund a project like this

