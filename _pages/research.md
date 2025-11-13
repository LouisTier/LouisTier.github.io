---
layout: page
title: "Research"
permalink: /research/
description:
nav: true
nav_order: 1
---

My research lies at the intersection of **applied mathematics** and **machine learning**, with a focus on developing **reliable theoretical frameworks** for **real-world industrial applications**.  
I am currently engaged in research collaborations with both **Michelin** and **Augmodo**, applying uncertainty-aware machine learning methods to industrial and retail settings.

<p>&nbsp;</p>

***

<p>&nbsp;</p>

## **Current Research**

<p>&nbsp;</p>

### Personal Exploration: Diffusion Models

I am personally exploring **diffusion models** and their applications, investigating how these generative models can be leveraged for various tasks.  
My exploration focuses on their potential integration with **live videos** and their use in industrial and scientific applications.  
This work is part of an **entrepreneurial business idea** I am developing, aiming to bridge cutting-edge generative AI research with practical, real-world solutions.

<p>&nbsp;</p>

***

<p>&nbsp;</p>

### Research at [Augmodo](https://www.augmodo.com/)

<div class="row justify-content-sm-center mt-3">
    <div class="col-sm-6 mt-3 mt-md-0">
        {%
        include figure.liquid
        path="assets/img/research/augmodo_logo.png"
        title="Augmodo Logo"
        class="img-fluid rounded z-depth-1"
        %}
    </div>
</div>

#### **Inference-Time Uncertainty Quantification**

I collaborate with [Augmodo](https://www.augmodo.com/) as a **Computer Vision Scientist**, developing **uncertainty-aware computer vision models** for open-world retail deployments.  
My work focuses on building robust pipelines that handle **millions of images per day**, improving accuracy and reliability in real-world production environments.  
I collaborate closely with [Sacha Hu](https://www.sachahu.com/), Senior Computer Vision Scientist, on end-to-end pipeline development, applying uncertainty quantification principles to ensure robust performance at scale.

<p>&nbsp;</p>

***

<p>&nbsp;</p>

### Research at [Michelin](https://www.michelin.com/)

<div class="row justify-content-sm-center mt-3">
    <div class="col-sm-6 mt-3 mt-md-0">
        {%
        include figure.liquid
        path="assets/img/research/michelin_logo.png"
        title="Michelin Logo"
        class="img-fluid rounded z-depth-1"
        %}
    </div>
</div>

As part of my PhD at the [Centre de Mathématiques Appliquées (CMAP)](https://cmap.ip-paris.fr/) — [École Polytechnique](https://www.polytechnique.edu/) — in collaboration with [Michelin](https://www.michelin.com/), I work on the following research directions:

<p>&nbsp;</p>

#### **Adaptive Soft Sensing**

I design machine learning and deep learning methods to enable **real-time quality monitoring** in rubber manufacturing processes.  
My research explores three complementary strategies:

- **Moving Window (MW)** approaches for temporal pattern analysis,  
- **Just-in-Time Learning (JITL)** for adaptive, sample-specific modeling, and  
- **Ensemble (ENS)** techniques for enhanced robustness and stability.  

These methods aim to deliver **accurate and computationally efficient** quality assessments under dynamic industrial conditions, enabling proactive decision-making in production environments.

<p>&nbsp;</p>

#### **Online Uncertainty Quantification**

I develop **uncertainty-aware learning frameworks** for predictive modeling in industrial systems, with a particular focus on **conformal prediction (CP)**.  
This work seeks to provide **statistically valid confidence measures** alongside predictions, enabling safer and more interpretable decision-making.  
In the long term, these methods will support **autonomous process control**, dynamically adjusting production parameters and refining laboratory sampling based on both predicted outcomes and their associated uncertainties.

<p>&nbsp;</p>

#### **Unsupervised Learning and Dimensionality Reduction**

I developed [torchsom](https://github.com/michelin/TorchSOM), a PyTorch-based package for **dimensionality reduction** and **data visualization** using Self-Organizing Maps (SOMs), designed for **industrial scalability** and efficient integration into online sensing pipelines.  
As an alternative to UMAP and t-SNE, TorchSOM provides a **topology-preserving**, interpretable representation of high-dimensional data, particularly suited for **JITL** and **process monitoring**.

<div class="row justify-content-sm-center mt-3">
    <div class="col-sm-6 mt-3 mt-md-0">
        {%
        include figure.liquid
        path="assets/img/research/torchsom_logo.png"
        title="TorchSOM Logo"
        class="img-fluid rounded z-depth-1"
        %}
    </div>
</div>

<p>&nbsp;</p>

***

<p>&nbsp;</p>

## **Previous Research**

<p>&nbsp;</p>

### Research at the [Adaptive & Intelligent Robotics Lab](https://www.imperial.ac.uk/adaptive-intelligent-robotics/) (AIRL)

<div class="row justify-content-sm-center mt-3">
    <div class="col-sm-6 mt-3 mt-md-0 mx-auto">
        {%
        include figure.liquid
        path="assets/img/research/airl_logo.png"
        title="Adaptive & Intelligent Robotics Lab Logo"
        class="img-fluid rounded z-depth-1"
        %}
    </div>
</div>

#### **Model-Based Quality-Diversity Optimization**

During my MSc at [Imperial College London](https://www.imperial.ac.uk/), I conducted research at the [Adaptive & Intelligent Robotics Lab](https://www.imperial.ac.uk/adaptive-intelligent-robotics/) under the supervision of [Pr. Antoine Cully](https://www.imperial.ac.uk/people/a.cully).  

My work focused on **Quality-Diversity (QD) optimization**, a branch of evolutionary computation that aims to discover **diverse and high-performing** solutions.  
Traditional QD algorithms are data-hungry and computationally expensive, making them impractical for real-world robotics applications.  
I addressed these limitations by integrating **surrogate models** and **active sampling strategies** into QD algorithms, improving both **robustness** and **data efficiency**.  
Eight algorithmic variants combining model architectures, sampling strategies, and repertoire reset mechanisms were tested on a **robotic arm control task**, demonstrating improvements in sample efficiency.

<p>&nbsp;</p>

***

<p>&nbsp;</p>

### Research at the [CNRS Brain & Cognitive Research Center](https://cerco.cnrs.fr/) (CerCo)

<div class="row justify-content-sm-center mt-3">
    <div class="col-sm-6 mt-3 mt-md-0 mx-auto">
        {%
        include figure.liquid
        path="assets/img/research/cnrs_logo.png"
        title="CNRS & CerCo Logo"
        class="img-fluid rounded z-depth-1"
        %}
    </div>
</div>

#### **Detection of Pathological Oscillations in Epilepsy**

During my MSc at [IMT Mines Alès](https://www.imt-mines-ales.fr/), I worked at the [CNRS CerCo Laboratory](https://cerco.cnrs.fr/) under the supervision of [Dr. Ludovic Gardy](https://www.linkedin.com/in/ludovic-gardy/), [Pr. Christophe Hurter](https://www.linkedin.com/in/christophe-hurter-2514393/) and [Pr. Emmanuel Barbeau](https://www.linkedin.com/in/emmanuel-barbeau-153b151b9/)

My research addressed the **detection of pathological oscillations** (fast ripples) in **epileptic EEG signals** using **signal processing** and **convolutional neural networks (CNNs)**.  
I transformed 1D EEG signals into 2D **time–frequency scalograms** via **Morlet-based continuous wavelet transform (CWT)** for efficient CNN learning.  
To enhance interpretability, I used **Grad-CAM** to visualize activation regions and trace feature relevance across network layers.  
I further optimized the pipeline with **Cython**, achieving a **15% reduction in computation time** and improved **cross-biomarker generalization**, making the system more suitable for clinical deployment.
