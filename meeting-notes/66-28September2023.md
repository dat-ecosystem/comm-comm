# AMA Session with Diego (Sher)

28-09-2023

## Important Links
* https://sher.app/
* https://sher.app/show/09b07f50062ee0ecd59062e3631429306e5369700f4d33f93ad95c038febcb15
* https://github.com/geut/staty
* https://github.com/geut/discovery-swarm-webrtc

## Notes

### AMA session intro
**Diego:**
We are a group of Developers (Max, Stephan, Diego, Martin) under the Geut Consultancy.
We are all interested in peer to peer technology, especially **dat**.
Back then **dat** was generally more mature and simple than IPFS or other projects.
There were a lot of great minds around the dat project.
There was a node conference workshop in Argentina where we started.
We always shared the love for peer to peer and the web and share a common vision to
make the web more peer to peer and less centralized.
We also shared the common goal of building our own project, self organized, self managed, where we are in charge. It took as a lot of internal meetings and heated debates and at some point things started to crystalize, that we want to create a project related to peer to peer streaming.
The challenges we had to overcome were not just technical to make peer to peer actually work,
but also how to create a business model around it that would make things sustainable.
Martin, being as practical as he is, managed to put together some smaller modules combined to a prototype to demo how this could become possible.
Next to it, on the business side of things, lots of people tell to not spend too much time on prototyping, but quickly figure out if there is some interest in the market.
It took many month working on the code.
It also took a lot of time to reach out and talk to potential users.
The result was a peer to peer streaming engine combined with a platform for user, producers (creators) and consumers, and most of the users had no technical background. Local creators showed interest in something build by latin americans for latin americans.
There is a lot of interest by creators and consumers and the main struggle is that this all happened in context of a challenging economic context in Latin America.
Regardless of this all motivated us and we managed to combine peer to peer audio streaming with a nice user friendly UX in the browser called `sher.app`, where people can come, create their show and invite people to join to listen to a show and chat in real time. It allows to invite co-streamers just by sharing a link and all communication happens peer to peer so a lot of money is saved by removing the need for renting servers to scale the service.
This is achieved by having the audience share the content. Other services, like "twitch" have only about 60% of the revenue and the rest is spent on infrastructure.
With sher we lowered the barrier to entry. Users don't need to download anything.
Creators can get 80% of the revenue and this is really hard to compete with for others who do not leverage peer to peer technology.
A remaining problem that remains though is to not have enough funds yet to create our own economy on top of sher, so there is a need for services like stripe, which don't work well in Latin America.
We are regardless looking forward to offer subscription models in the near future.
This is the gist of every aspect of the entire project from the beginning ins a nutshell.

**Nina:**
That's realy cool how you started this all from "the garage" and what is possible

**Diego:**
Yes, I'd like to encourage and see more projects to build on top of the dat (hyper/holepunch) stack.
This is really powerful for the user. It's not just about data sovereignity, but also higher revenue share for creators, by cutting out unncessary intermediaries and costs.
The challenge that remains is offering all the advantages that come with peer to peer technology to the users, and that includes UX and making it in general available to end users without awkward unfamiliar experiences.

### Sher motivation

### Core fatures
FEATURES:
1. people can go to `sher.app` and browse shows
2. people can go to `"My Shows"` to see all stages they have created
   * an "on air stage"
   * an "offline stage"
From here a user can just click "go live" to start broadcasting.
It displays to users stats about the ongoing shows
  * the amount of listeners 
  * how long the show is already lasting
  * ... etc ...

The app focuses on audio first, but supports a chat interface for listeners to give feedback to the creators who is broadcasting their audio stream peer to peer.

**Future Plans:**
To also create and record and share audio broadcasts as podcasts.
The problem at the moment is, it is all for live streaming and not for recordings yet.
We might need some UX to reshare recorded live streams to create podcast economics.

**Nina:**
This is amazing to see. The UI/UX looks also very new and fresh and there are quite some cool new features. It also starts looking more professional when it comes to audio features that make it look like a real professional tool and not just like an app.

**Diego:**
We learned a lot from producers and radio operators and what are their needs.
We also checked others tools, like OBS, that are really complex and to see what features could be adopted to keep a balance between capabilities and usability for and by users.

**Nina:**
What are features now and planned features for the future?
What are the open source building blocks of share if any?

**Diego:**
As creators/owners of the platform we want to add a lot of features, like saving audio on the device to share and re-listen to it and others, but they aren't their yet.
If we go to a mainstream creator with a calculator and show them it gives them 50% of the earnings and with sher they can get 90% of the earnings, but we have to connect with other platforms and create a UX that gives it more feature parity with other more expensive and more centralized alternatives. We managed to get quite far and self funded most of it and took a lot of risk, but we also lost a co-founder in the process and had difficult times as well.
We are very happy that the platform is useful now and people try it and play with it.

**Nina:**
What is the most important thing for sher to become sustainable. I see 3 options at least:
1. one thing would be to add a payment system so artists can earn and sher can be sustainable
2. or to integrate with others platforms to improve the experience?
3. maybe it needs more features first to get people to invest their creativity into the product

**Diego:**
3. We definitely need a feature that allows users to move between browsers, so users can take their keypair with it from one browser to another.
1. We need to be able to integrate with payment platforms and that also requires more user data, which relates to (3.)
2. Also integrating with other platforms helps, but we need the funds and users to put the effort into that too. It's a bit a chicken/egg problem, but of course, at some point you need to make some decisions and we hope to favour the creators, which is definitely a value proposition that is one main selling point of `sher.app`

**Nina:**
Looking forward to see how things move forward.
What comes to mind that stripe is part of big tech and one way of solving it, another one is to explore crypto/blockchains, which also offer yet another community of creators and different ways to payment networks as well.

**Diego:**
What we want to avoid is just a "tipping" system where the audience can give a sporadic tip to the creators and that might not give a reliable steady income.
Another important aspect is to get the technology to be mature enough to make it easy enough to integrate and doesn't make us spend too much time, but of course crypto/blockchains might be worht exploring at some point. `Keet.io` for example has integrated micropayments and they are growing, so this is quite interesting to observe.

**Nina:**
I feel that's an entire planet to explore, but maybe we should now also jump to Martin to have him present some technical aspects. What is sher made of and what is out there that others might be able to re-use and how did you get dat (hyper/holepunch) work in the browser?

**Martin:**
The project is all based on `hypercores`. The magic is mostly on how we connect the modules.
We really use the hypercore ecosystem, mostly the older hypercores, before the forking. Basically hypercore9.
The WebRTC parts were really important for us to build so we can connect peers in the web, using a signalling server. We built it based on our previous work.
Once you connect with others via WebRTC, you can just pipe data streams to it, which means you can replicate hypercores.
We have some ideas how to speed up broadcasting across the network.
Our SDK (which is similar to dat) has the concept of an operator (basically a broadcaster), creates for every show a hypercore and a lot of audio data (e.g. music) is put into the hypercore and we replicate that to all listening peers.
We take the audio data and encode it and put it into a really nice web player to play the sound, the audio.
The central signalling server connects all peers that listen to a show. It serves as a bootsrapping node, but after that it's entirely peer to peer.
So far, our server costs for the signalling server is 4 USD per month, so it's negligible.
We also use a library for managing hypercores, but it is not corestore, but it is less opinionated.
We have also a hyperbee data structure and maintain a key value store to track every show every operator has. So every show has information around the show that a creator wants to share.
It is very similar to what mafintosh did with hyperdrive. One hyperbee for meta information and another hyprecore for the data.

**Nina:**
Is any of that open source?

**Diego:**
We have `discovery-swarm-webrtc` (https://github.com/geut/discovery-swarm-webrtc) which is open source and there is also one that belongs to reactiveness and state management in the UI called staty (https://github.com/geut/staty) and it is not necessary to use `react` framework to use it.

**aboynejames:**
In terms of the economic argument, I don't think this analysis is accurate. The 'cloud' is profitable and they 'own' the users, pay for their hosting.  The 'cloud' is a formidable competitor.  I like the Latin America focus but would like to know more about specific Latin America use cases e.g. folk music or local soccer games  or other sports etc?

**Diego:** according to what we saw from twitch spanish content, more than 60% latin american creators/ we crazy consume online radios, that right now are online on youtube, so they added a camera but is the same thing. like for example, messi was chatting with migue granados on a show that is only streamed on youtube and twitch.

**Nina:**
Are you using `protomux`?

**Martin:**
No, we don't. We do use nanomessage (https://github.com/geut/nanomessage). A lot is just stringified JSON, but the audio is better optimized to improve performance. The codec is the "opus codec" and that is a public module as well. We also use `nanomessage-rpc` (https://github.com/geut/nanomessage-rpc).

**Aboynejames:**
Does it make sense to use WASM?

**Martin:**
We do use javascript in the browser and it is always a bit tricky to say if WASM will actually improve things. It can take month to build something based on WASM and it might not be better afterwards. We were playing with the `zig` language and it compiles to WASM as well and maybe things could be programmed to use hypercore in `zig` and this could improve things, but at the moment we mainly use javascript. We do use WASM for the audio codec though, because the "opus codec" is written in C/C++ and we need to compile it to WASM to make it work in the browser.
We also use WASM to build the audio packages.

**Nina:**
Are there ways how others could user or embed sher? Can people embed or use APIs etc...? ...or are there any plans?

**Martin:**
We thought about it, but for now we don't have time for it.
We might create an embeddable version of sher in the future and publish the SDK to connect to peers without having to use sher.app and it might help iwth distribution as well so content creators can reach an even broader audience.

**Aboynejames:**
Could a **nostr relay** reduce the bootstrapping risk?

**Martin:**
We are talking about the signalling here. The problem is, if we abandon the signalling server, we lost the chance to connect peers in the web. There is google to work on a spec for tcp sockets, but for now the only way is by using a central server where you cna connect through websockets and that's one of the ways. The other way is by forcing clients or users to install a daemon, but for many users that is not a viable solution. Users who listen to shows don't understand what peer to peer means so we have to maintain the idea of having a centralized servers.

**Nina:** Maybe creators could become more technically sophesticated and maybe run signalling servers by downloading a custom software.

**Martin:**
Yes, that might be a solution and we already have some tech that allows us to do this eventually.

**Nina:**
Sher is really an amazing product, but it's really interesting to see how many more obstacle around users and funding and technology remain to grow things further. There are a lot of topics we should continue to discuss as a community, maybe having those kind of calls more often in the future, but also maybe to discuss around dat-ecosystem or on the sher-discord to share and stay in touch.

**Martin:**
Yes, we should keep on sharing.

**Diego:**
If you want to help sher.app, spread the word. This is very little effort and helps a lot.
That's always helpful. We are also open to continue chatting and hanging around different channels to stay aware of what is happening in the ecosystem.
If there are bigger changes in the project we will announce it properly, which includes the open source side of the project which is always on our mind.
We love open source, we use it day to day and we try to fix it and plan to release more parts of sher open source, but do it properly, which includes documentation and maintainance.
One example is `staty` which we know is stable, well documented and well maintained, but it takes time and effort we need to balance.
We were buried for a long time in the project and it was hard and intense and now we are finally coming back up to the surface.

**Nina:**
Alright, that was an amazing AMA. Thank you for the input. Let's share more of this. Good luck with the project.

**Diego:**
Yes, thank you very much :-)
