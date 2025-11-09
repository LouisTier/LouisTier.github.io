---
# TODO (LouisTier): Update Research page
layout: page
title: "Research"
permalink: /research/
description:
nav: true
nav_order: 1
---

## Ongoing Research Interests

My research lies at the intersection of **applied mathematics** and **machine learning**, with a focus on developing **reliable theoretical frameworks** for **real-world industrial applications**.  
As part of my PhD at the [Centre de Mathématiques Appliquées (CMAP)](https://cmap.ip-paris.fr/) — [École Polytechnique](https://www.polytechnique.edu/) — in collaboration with [Michelin](https://www.michelin.com/), I work on the following research directions:

### Online Sensing

I design machine learning and deep learning methods to enable **real-time quality monitoring** in rubber manufacturing processes.  
My research explores three complementary strategies:

- **Moving Window (MW)** approaches for temporal pattern analysis,  
- **Just-in-Time Learning (JITL)** for adaptive, sample-specific modeling, and  
- **Ensemble (ENS)** techniques for enhanced robustness and stability.  

These methods aim to deliver **accurate and computationally efficient** quality assessments under dynamic industrial conditions.

### Uncertainty Quantification

I develop **uncertainty-aware learning frameworks** for predictive modeling in industrial systems, with a particular focus on **conformal prediction (CP)**.
This work seeks to provide **statistically valid confidence measures** alongside predictions, enabling safer and more interpretable decision-making.  
In the long term, these methods will support **autonomous process control**, dynamically adjusting production parameters and refining laboratory sampling based on both predicted outcomes and their associated uncertainties.

### Unsupervised settings

I developed [torchsom](https://github.com/michelin/TorchSOM), a PyTorch-based package for **dimensionality reduction** and **data visualization** using Self-Organizing Maps (SOMs), designed for **industrial scalability** and efficient integration into online sensing pipelines.  
As an alternative to UMAP and t-SNE, TorchSOM provides a **topology-preserving**, interpretable representation of high-dimensional data, particularly suited for **JITL** and **process monitoring**.  
<!-- The package has been designed for **industrial scalability** and efficient integration into online sensing pipelines. -->

<!-- ### Hybrid Modeling *(Future Direction)*

A future research direction involves **hybrid modeling**, integrating **physics-based models** with **data-driven methods** to enhance predictive accuracy and generalization.  
This includes leveraging **synthetic data** generated from physical simulators and combining it with **real measurements** through **uncertainty-aware weighting**.  
Such approaches are particularly valuable when **real data is scarce** or when **physical constraints** must be strictly respected, offering a promising path toward **trustworthy AI in manufacturing**. -->

<p>&nbsp;</p>

## Previous Research Applications

### Model-Based Quality-Diversity Optimization

During my MSc at [Imperial College London](https://www.imperial.ac.uk/), I conducted research at the [Adaptive & Intelligent Robotics Lab](https://www.imperial.ac.uk/adaptive-intelligent-robotics/) under the supervision of [Pr. Antoine Cully](https://www.imperial.ac.uk/people/a.cully).  

My work focused on **Quality-Diversity (QD) optimization**, a branch of evolutionary computation that aims to discover **diverse and high-performing** solutions.  
Traditional QD algorithms are data-hungry and computationally expensive, making them impractical for real-world robotics.  
I addressed these limitations by integrating **surrogate models** and **active sampling strategies** into QD algorithms, improving both **robustness** and **data efficiency**.  
Eight algorithmic variants combining model architectures, sampling strategies, and repertoire reset mechanisms were tested on a **robotic arm control task**.

### Detection of Pathological Oscillations in Epilepsy

During my MSc at [IMT Mines Alès](https://www.imt-mines-ales.fr/), I worked at the [CNRS CerCo Laboratory](https://cerco.cnrs.fr/) under the supervision of [Dr. Ludovic Gardy](https://www.linkedin.com/in/ludovic-gardy/), [Pr. Christophe Hurter](https://www.linkedin.com/in/christophe-hurter-2514393/) and [Pr. Emmanuel Barbeau](https://www.linkedin.com/in/emmanuel-barbeau-153b151b9/)

My research addressed the **detection of pathological oscillations** (fast ripples) in **epileptic EEG signals** using **signal processing** and **convolutional neural networks (CNNs)**.  
I transformed 1D EEG signals into 2D **time–frequency scalograms** via **Morlet-based continuous wavelet transform (CWT)** for efficient CNN learning.  
To enhance interpretability, I used **Grad-CAM** to visualize activation regions and trace feature relevance across network layers.  
I further optimized the pipeline with **Cython**, achieving a **15% reduction in computation time** and improved **cross-biomarker generalization**.

<p>&nbsp;</p>
