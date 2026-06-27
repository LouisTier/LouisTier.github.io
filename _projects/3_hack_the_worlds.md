---
layout: page
title: "Wiring the Fly Brain into a World Model"
description: "A JEPA world model built on a complete fly-brain connectome. 2nd place with team Piaget at Hack the World(s)."
img: assets/img/projects/fly_thumbnail.jpg
importance: 3
category: hackathon
giscus_comments: false
---

Can a self-supervised world model learn the dynamics of a *real* brain, not a metaphor for one, but an actual, complete wiring diagram? At Hack the World(s), under the patronage of Philippe Baptiste and sponsored by Yann LeCun (who introduced the JEPA architecture at the heart of the event), our team **Piaget** spent 24 hours answering that question, and placed **2nd**.

The fruit fly (Drosophila) is the only animal whose entire connectome has been mapped. We took **FlyWire**, the first complete wiring diagram of an adult brain (about 140,000 neurons and 50 million synapses), embodied it in a physics simulation of the fly's body (**NeuroMechFly v2**, in MuJoCo), and closed the sensorimotor loop. Every 50 ms: light and odours reach the sensory organs, neurons fire across the connectome, and descending neurons drive the legs, which changes what the senses receive next.

Rather than treating the brain as a single block, we followed its anatomy. **Each region gets its own predictive sub-model**, and the sub-models are chained in the order the real lobes talk to one another: senses first, integration next, movement last. All of it runs on the **EB-JEPA** framework by Basile Terver.

One biological quirk made this hard. A fly's brain is almost silent: about **96% of its neurons stay quiet at any instant**, and that sparsity pushes JEPA toward collapse. Our answer was anatomical too, a *spiking* encoder that lets each firing neuron listen to its synaptic neighbours through the real wiring, so the connectome itself becomes the cure for collapse.

Three results:

- **Decodable**: the descending (motor) latent predicts the brain's own firing and linearly reads out the fly's real motor command.
- **Predictive**: training on multi-step rollouts keeps the forecasts stable.
- **Hierarchical**: feeding the motor region from upstream regions measurably sharpens forecasts, increasingly so over longer horizons.

To our knowledge, this is the first JEPA world model built on a complete brain: decodable, predictive, and anatomically grounded. As Jean Piaget wrote, *"intelligence organizes the world by organizing itself."* For 24 hours, so did we.

**Team Piaget:** Louis Berthier, [Lucas Thil](https://www.linkedin.com/in/lucas-andrei-thil/), [Daniel Nowak-Assis](https://www.linkedin.com/in/daniel-nowak-assis-77a6311a2/), and [Adam Jlidi](https://www.linkedin.com/in/adam-jlidi-1a9504296/).

---

## Recognition

**Yann LeCun**, who sponsored the event and introduced the JEPA architecture, reposted the project to his followers ("2ème place au Hack The World hackathon") and left a comment: *"Bravo 👏👏👏"*. Several researchers and professors also encouraged us to take the work further as a research project.

<div class="row justify-content-sm-center mt-3 mb-2">
    <div class="col-md-7 mb-2">
        {% include figure.liquid path="assets/img/projects/yl_repost.jpg" title="Yann LeCun reposting the project" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-md-5 mb-2">
        {% include figure.liquid path="assets/img/projects/yl_congrats.png" title="Yann LeCun's congratulations" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<p class="text-muted small text-center">
    <a href="https://www.linkedin.com/posts/yann-lecun_worldmodels-jepa-ai-activity-7474507808990896128-vYgV">Yann LeCun's repost</a> and <a href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7474427943495208960/?dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287474507559685623808%2Curn%3Ali%3AugcPost%3A7474427943495208960%29">his comment</a> on LinkedIn.
</p>

---

## The embodied fly

The connectome-driven, simulated fly is the substrate our world model learns from. The clip below shows that kind of virtual embodied fly using invisible cues to navigate toward food.

<div style="width: 100%; max-width: 900px; margin: 1rem auto 0.5rem;">
    <video controls preload="metadata" style="width: 100%; border-radius: 8px;">
        <source src="https://cdn.eon.systems/videos/blogpost-fly-video.mp4" type="video/mp4">
    </video>
</div>
<p class="text-muted small text-center">Video: <a href="https://eon.systems/updates/embodied-brain-emulation">Eon Systems</a>' virtual embodied fly (related work). Piaget's contribution is the JEPA world model trained on the brain's spikes.</p>

---

<div class="d-flex gap-2 justify-content-center mt-3">
    <a href="/assets/pdf/the_fly.pdf" class="btn btn-sm btn-outline-primary" target="_blank">Pitch deck (PDF)</a>
    <a href="https://hacktheworlds.fr/" class="btn btn-sm btn-outline-secondary" target="_blank">Event Page</a>
    <a href="/hackathons/" class="btn btn-sm btn-outline-secondary">See all Hackathons</a>
</div>
