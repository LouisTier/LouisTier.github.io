---
layout: page
title: "Research"
permalink: /research/
description: Applied mathematics and machine learning for industrial systems.
seo_description: "Research by Louis Berthier: conformal prediction and soft sensors for tire manufacturing at Michelin, computer vision at Augmodo, and world models for EEG."
nav: true
nav_order: 1
toc:
  sidebar: left
---

My research develops machine learning methods that are not only accurate but also *know when they might be wrong*, a critical property for deployment in high-stakes industrial environments.

---

## Current Research
{: .lb-period data-toc-skip=""}

I currently work on three fronts: machine learning and uncertainty quantification for tire manufacturing in my PhD with [Michelin](https://www.michelin.com/), Spatial AI for retail at [Augmodo](https://www.augmodo.com/), and world models for EEG through the [Unaite Fellowship](https://fellowship.unaite.fr/program).

### [Michelin](https://www.michelin.com/)
{: #michelin}

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/research/michelin_logo.png" title="Michelin Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

My PhD, carried out at the [Centre de Mathématiques Appliquées (CMAP)](https://cmap.ip-paris.fr/) of [École Polytechnique](https://www.polytechnique.edu/) in collaboration with [Michelin](https://www.michelin.com/), focuses on predicting rubber quality in real time, directly on the production line. It rests on four pillars.

<div class="lb-topics" markdown="1">

<h4 class="lb-fold-title" id="explainable-process-analytics"><button type="button" aria-expanded="false" aria-controls="fold-process-analytics">Explainable Process Analytics</button></h4>

<div class="lb-fold-body" id="fold-process-analytics" hidden="until-found" markdown="1">

Before predicting quality online, one has to understand what drives it. Batches made to the same quality grade still fluctuate, and the causes are hard to untangle from recipe settings, raw materials, process variables, and even the weather.

On 35,125 Michelin rubber-mixing records with 316 input variables, I built an offline analytics framework that combines explainability with uncertainty quantification: ranked frequency feature selection **keeps only 20 variables (94% fewer) at equal accuracy**, SHAP (which scores how much each variable drives a prediction) reveals the influential variables, their threshold-like effects, and their interactions, and multi-split conformal prediction adds calibrated prediction intervals with subgroup diagnostics that expose undercoverage.

This work has been accepted for publication in [Digital Chemical Engineering](/publications/#berthier2026explainable_offline_analytics) (2026) and extends the paper I presented at [ESCAPE 35](/publications/#berthier2025knowledge_discovery_rubber_mixing) (2025).

<div class="lb-research-links">
  <a class="btn btn-sm z-depth-0" href="/publications/#berthier2026explainable_offline_analytics" role="button">Journal paper</a>
  <a class="btn btn-sm z-depth-0" href="https://doi.org/10.69997/sct.183525" role="button">Conference paper</a>
  <a class="btn btn-sm z-depth-0" href="https://github.com/LouisTier/xopa" role="button">Code</a>
  <a class="btn btn-sm z-depth-0" href="/talks/#escape-35" role="button">Talk</a>
  <a class="btn btn-sm z-depth-0" href="/talks/#poster-knowledge-discovery" role="button">Poster</a>
</div>

</div>

<h4 class="lb-fold-title" id="adaptive-soft-sensing"><button type="button" aria-expanded="false" aria-controls="fold-soft-sensing">Adaptive Soft Sensing</button></h4>

<div class="lb-fold-body" id="fold-soft-sensing" hidden="until-found" markdown="1">

In tire manufacturing, product quality is traditionally measured offline in a laboratory, a process that is slow, expensive, and arrives too late to correct production issues. I develop *soft sensors*, machine learning models that predict quality from live process signals in real time, so the answer is available on the line instead of hours later in the lab.

Because industrial processes constantly evolve, with both gradual and sudden drifts, I built a unified online framework that benchmarks five adaptation strategies:

- **Moving Window**: learns from the most recent batches to track gradual temporal shifts
- **Ensemble**: combines several models for robustness, their disagreement also flagging when the process moves into unfamiliar territory
- **Just-in-Time Learning**: for each new sample, retrieves the most similar historical batches and fits a prediction tailored to it
- **Just-in-Time Moving Window** and **Just-in-Time Ensemble**: two hybrids that blend similarity-based retrieval with temporal memory

Validated on 35,125 production batches at Michelin and tested over both a short horizon of about six weeks and a full year of drift, every adaptive strategy beats a static model: **the best hybrid cuts prediction error by around 59% in the short term and by more than 90% under year-long drift**, the hybrids paying off most because they balance short-term reactivity against long-term memory.

The Just-in-Time soft sensor, which retrieves similar batches through a Self-Organizing Map and selects the most influential variables online with SHAP, was published at [IEEE ETFA](/publications/#berthier2026etfa_adaptive_soft_sensing) (2026), where I presented it in Västerås: on a Michelin rubber production line, it cuts the mean squared error by up to 61% and lifts R² from -0.14 to 0.56 over global baselines.

<div class="lb-research-links">
  <a class="btn btn-sm z-depth-0" href="https://doi.org/10.1109/ETFA68377.2026.11725271" role="button">Conference paper</a>
  <a class="btn btn-sm z-depth-0" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&amp;arnumber=11725271" role="button">PDF</a>
  <a class="btn btn-sm z-depth-0" href="/talks/#etfa-2026" role="button">Talk</a>
</div>

</div>

<h4 class="lb-fold-title" id="uncertainty-quantification"><button type="button" aria-expanded="false" aria-controls="fold-uncertainty">Uncertainty Quantification</button></h4>

<div class="lb-fold-body" id="fold-uncertainty" hidden="until-found" markdown="1">

A prediction is only useful if you know how much to trust it. I develop uncertainty quantification methods, with a focus on conformal prediction, a distribution-free way to turn any model's output into a prediction interval that is right a chosen fraction of the time, say 90%.

The catch is that this guarantee usually holds only *on average*, which is where my contributions come in:

- **Self-Organized Conformal Prediction**, accepted at [NeurIPS](/publications/#berthier2026selforganized_cp) (2026): an average-case guarantee can hide *regional* undercoverage, intervals that look reliable overall yet are systematically too tight for a safety-critical corner of the process. It discovers those regions directly from the input geometry with a Self-Organizing Map, then calibrates locally inside each one, with no supervised labels and no model retraining.

  It offers three ways to draw the local calibration set (the best-matching cell, a fixed neighborhood around it, or an enlargement by prototype distance), with exact cell-conditional validity when retrieving a single cell, while staying model and score agnostic. Across ten regression and classification benchmarks, **it lowers the regional coverage gap on all ten, by 14.8% on average**, for only a 3% increase in prediction-set size.

- **Where Should Locality Enter Conformal Prediction?** (under review): with [Eric Moulines](https://www.linkedin.com/in/eric-moulines-61512860/), I compare two ways of making conformal prediction local on a fixed partition: estimating a threshold inside each cell (Mondrian calibration), or rescaling scores cell by cell before pooling them (score normalization). With limited labels, estimating quantiles separately in each cell before pooling has an explicit cost in coverage risk compared with Mondrian calibration on the same labels.

- **Mask-Valid Conformal Prediction** (under review): deploying conformal prediction over a long stream of batches calls for coverage that localizes to flexible time windows, renews after a failure, and never needs past test labels. It meets this with binary monitoring masks that interpolate between the marginal and the anytime regimes, a restart rule that renews validity after each detected failure, and cost-optimal monitoring schedules found by solving a problem with linear constraints (with a replanning step when those costs are only forecast).

  Crucially, **it stays informative for far longer, polynomially many steps in the calibration size**, whereas anytime e-process baselines can collapse to uninformative sets after only a handful. Joint work with [Mahmoud Hegazy](https://mahegz.github.io/), [Michael I. Jordan](https://www.linkedin.com/in/michael-jordan-767032125/), and [Aymeric Dieuleveut](https://www.linkedin.com/in/aymeric-dieuleveut-007211207/).

<div class="lb-research-links">
  <a class="btn btn-sm z-depth-0" href="https://arxiv.org/abs/2606.29403" role="button">Conference paper</a>
  <a class="btn btn-sm z-depth-0" href="https://arxiv.org/pdf/2606.29403" role="button">PDF</a>
  <a class="btn btn-sm z-depth-0" href="https://github.com/LouisTier/SOCP" role="button">Code</a>
  <a class="btn btn-sm z-depth-0" href="/assets/video/socp_neurips2026_45s.mp4" role="button">Video</a>
  <a class="btn btn-sm z-depth-0" href="/talks/#poster-self-organized-cp" role="button">Poster</a>
</div>

</div>

<h4 class="lb-fold-title" id="unsupervised-learning-and-dimensionality-reduction"><button type="button" aria-expanded="false" aria-controls="fold-torchsom">Unsupervised Learning and Dimensionality Reduction</button></h4>

<div class="lb-fold-body" id="fold-torchsom" hidden="until-found" markdown="1">

I created [TorchSOM](https://github.com/michelin/TorchSOM), the reference PyTorch library for Self-Organizing Maps (SOMs). A SOM maps high-dimensional data onto a low-dimensional grid while preserving its local topology, which makes it a natural backbone for process monitoring, for Just-in-Time retrieval, and for the unsupervised group discovery in Self-Organized Conformal Prediction. TorchSOM powers the similarity search at the heart of my soft sensing and conformal prediction pipelines.

Unlike earlier SOM tools, it brings together a native PyTorch backend with GPU acceleration, a scikit-learn-compatible API, a built-in clustering interface (K-Means, GMM, HDBSCAN), a suite of seven visualizations, Just-in-Time learning support, and rectangular or hexagonal grids that can wrap into toroidal shapes, all in one modular codebase, with an optional FAISS backend for very large maps. It reaches **the lowest topographic error in every rectangular-map configuration benchmarked**, 62 to 100% below MiniSom, while training 81 to 98% faster than MiniSom on CPU and up to about twelve times faster than somoclu on GPU. It ships on PyPI under the Apache 2.0 license through Michelin's open-source organization, with 90% test coverage and full documentation, and is described in a paper published in the [Journal of Machine Learning Research](/publications/#berthier2025torchsom) (2026).

<div class="lb-research-links">
  <a class="btn btn-sm z-depth-0" href="https://jmlr.org/papers/v27/25-2467.html" role="button">Journal paper</a>
  <a class="btn btn-sm z-depth-0" href="https://jmlr.org/papers/volume27/25-2467/25-2467.pdf" role="button">PDF</a>
  <a class="btn btn-sm z-depth-0" href="https://github.com/michelin/TorchSOM" role="button">Code</a>
  <a class="btn btn-sm z-depth-0" href="https://opensource.michelin.io/TorchSOM/" role="button">Documentation</a>
</div>

</div>

</div>

### [Augmodo](https://www.augmodo.com/)
{: #augmodo}

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/research/augmodo_logo.png" title="Augmodo Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

As a Computer Vision Scientist at [Augmodo](https://www.augmodo.com/), I develop vision models for its real-time Spatial AI, which tracks every product in every store from badge cameras worn by store associates, in open-world retail environments where the camera encounters products, lighting conditions, and edge cases never seen during training. I work alongside [Sacha Hu](https://www.sachahu.com/) (Senior CV Engineer), [Ashley Napier](https://www.linkedin.com/in/ashleyanapier/) (CV Group Lead), and [Galen Han](https://www.linkedin.com/in/galenhan/) (Senior CV Engineer) on pipelines that process more than 100,000 images a day.

<div class="lb-topics" markdown="1">

<h4 class="lb-fold-title" id="open-world-product-recognition"><button type="button" aria-expanded="false" aria-controls="fold-product-recognition">Open-World Product Recognition</button></h4>

<div class="lb-fold-body" id="fold-product-recognition" hidden="until-found" markdown="1">

Every shelf image holds many products, and each one has to be recognized against a catalog that keeps growing as new products reach the shelves.

I work on open-world vision-language models (VLMs) that recognize products, aisles, and price tags from images alone, trained on paired images and product descriptions for product identification and planogram matching.

When a newer detector replaces an older one, I carry the legacy product annotations over to its boxes automatically, by matching old and new boxes on their overlap, then measure how product retrieval changes on the new crops, so that large existing datasets can follow newer models without costly manual re-annotation.

</div>

<h4 class="lb-fold-title" id="inference-time-uncertainty-quantification"><button type="button" aria-expanded="false" aria-controls="fold-inference-uncertainty">Inference-Time Uncertainty Quantification</button></h4>

<div class="lb-fold-body" id="fold-inference-uncertainty" hidden="until-found" markdown="1">

In an open world, some predictions will be wrong, so each one needs a confidence that decides whether it is accepted as is or sent to a person.

I estimate that confidence at inference time with *test-time augmentation*: each product crop is perturbed several times (rotation, translation, scale, shear, brightness, noise) and embedded again. I compare two ways to turn these copies into a decision: averaging their embeddings and reading the uncertainty from their spread, or letting each copy vote and reading it from their disagreement (bagging). A threshold on that uncertainty sends only the uncertain predictions to human review.

</div>

<h4 class="lb-fold-title" id="learning-from-human-review"><button type="button" aria-expanded="false" aria-controls="fold-human-review">Learning from Human Review</button></h4>

<div class="lb-fold-body" id="fold-human-review" hidden="until-found" markdown="1">

A detector flags empty shelf areas, the gaps where a product is out of stock, and human reviewers then confirm or reject each one, so every review tells the detector whether it was right.

I turn that feedback into a training signal for YOLO and RF-DETR, a transformer-based detector, with multi-GPU cloud training. A masked loss learns from *hard negatives*, the gaps reviewers rejected, by lowering only the empty-area score of the matching prediction; gaps confirmed in review are added as positives, and a frozen teacher model labels the rest of each partly annotated frame. The aim is to suppress confirmed false positives without degrading the other shelf classes.

To tell a real gap from a dark or shadowed shelf, I also give the detector depth as a fourth input channel, estimated from the image itself with Depth Anything V2, and I built the RGB+depth version of a classifier that checks each empty-area alert before it reaches a reviewer.

</div>

<h4 class="lb-fold-title" id="data-and-model-auditing"><button type="button" aria-expanded="false" aria-controls="fold-auditing">Data and Model Auditing</button></h4>

<div class="lb-fold-body" id="fold-auditing" hidden="until-found" markdown="1">

A detector is only as good as its labels. To find where the training data contradicts itself, I mine the frames with the highest loss under the current model, embed every frame with DINOv2, a self-supervised vision model, and search them with FAISS for near-identical views of the same shelf that were labeled differently. Each pair is traced back to its store, camera, and time, and each failure is tagged with its cause in an interactive review page that shows annotators which frames to relabel first.

I also benchmark detectors that predict oriented boxes, which follow the tilt of each item on the shelf, across model sizes and input resolutions, weighing accuracy against latency and GPU memory to choose what can run in real time.

</div>

</div>

### [Unaite Fellowship for AI in Biology](https://fellowship.unaite.fr/program)
{: #unaite data-toc-text="Unaite Fellowship"}

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/research/unaite_banner.jpg" title="Unaite Fellowship Logo" alt="Unaite Fellowship logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

In 2026, I joined the inaugural cohort of the [Unaite Fellowship for AI in Biology](https://fellowship.unaite.fr/program), a year-long international research fellowship in Paris.

<div class="lb-topics" markdown="1">

<h4 class="lb-fold-title" id="world-models-for-eeg"><button type="button" aria-expanded="false" aria-controls="fold-eeg">World Models for EEG</button></h4>

<div class="lb-fold-body" id="fold-eeg" hidden="until-found" markdown="1">

With fellow researchers and [Paul Hellegouarch](https://www.linkedin.com/in/paul-hellegouarch/), and mentored by [Dr. Quentin Garrido](https://garridoq.com/) and [Dr. Jean-Baptiste Masson](https://research.pasteur.fr/fr/member/jean-baptiste-masson/), I work on generative and world models for EEG. The project brings together two threads of my work: brain signals, which I first studied at the CNRS, and world models, which I explored with the [fly-brain world model](/projects/3_hack_the_worlds/) we built at Hack the World(s).

</div>

</div>

---

## Previous Research
{: .lb-period data-toc-skip=""}

Before my PhD, my two master's degrees took me to robotics at Imperial College London and to neuroscience at the CNRS.

### [Adaptive & Intelligent Robotics Lab](https://www.imperial.ac.uk/adaptive-intelligent-robotics/) (AIRL)
{: #airl data-toc-text="AIRL"}

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0 mx-auto">
        {% include figure.liquid path="assets/img/research/airl_logo.png" title="AIRL Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

During my MSc at [Imperial College London](https://www.imperial.ac.uk/), supervised by [Pr. Antoine Cully](https://www.imperial.ac.uk/people/a.cully), I worked on Quality-Diversity (QD) optimization, a family of evolutionary algorithms that doesn't just find *one* good solution but a diverse repertoire of high-performing ones.

<div class="lb-topics" markdown="1">

<h4 class="lb-fold-title" id="model-based-quality-diversity-optimization"><button type="button" aria-expanded="false" aria-controls="fold-quality-diversity">Model-Based Quality-Diversity Optimization</button></h4>

<div class="lb-fold-body" id="fold-quality-diversity" hidden="until-found" markdown="1">

Traditional QD methods require hundreds of thousands of evaluations, which is impractical for expensive simulations. I tackled this by integrating surrogate models and active sampling, testing eight algorithmic variants on a robotic arm control task: the best one beat MAP-Elites and came close to MAP-Elites with sampling. I also introduced two metrics for the uncertainty of a QD archive.

</div>

</div>

### [CNRS Brain & Cognitive Research Center](https://cerco.cnrs.fr/) (CerCo)
{: #cerco data-toc-text="CNRS CerCo"}

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0 mx-auto">
        {% include figure.liquid path="assets/img/research/cnrs_logo.png" title="CNRS & CerCo Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

During my MSc at [IMT Mines Alès](https://www.imt-mines-ales.fr/), supervised by [Dr. Ludovic Gardy](https://www.linkedin.com/in/ludovic-gardy/), [Pr. Christophe Hurter](https://www.linkedin.com/in/christophe-hurter-2514393/), and [Pr. Emmanuel Barbeau](https://www.linkedin.com/in/emmanuel-barbeau-153b151b9/), I developed deep learning methods for detecting *fast ripples*, brief high-frequency bursts in brain signals that serve as biomarkers for epileptic tissue.

<div class="lb-topics" markdown="1">

<h4 class="lb-fold-title" id="detection-of-pathological-oscillations-in-epilepsy"><button type="button" aria-expanded="false" aria-controls="fold-epilepsy">Detection of Pathological Oscillations in Epilepsy</button></h4>

<div class="lb-fold-body" id="fold-epilepsy" hidden="until-found" markdown="1">

The pipeline converts raw EEG signals into time-frequency images (via continuous wavelet transform), classifies them with CNNs, and uses Grad-CAM to highlight which parts of the signal drive the model's decision, giving clinicians both a prediction and a visual explanation. This work contributed to a paper in the [Journal of Neuroscience Methods](/publications/#gardy2025fast_ripples) (2025).

<div class="lb-research-links">
  <a class="btn btn-sm z-depth-0" href="https://doi.org/10.1016/j.jneumeth.2024.110350" role="button">Journal paper</a>
</div>

</div>

</div>
