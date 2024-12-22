import MarkdownIt from "markdown-it";
import mk from "./index";

const md = new MarkdownIt();
md.use(mk);

const input = document.querySelector("textarea") as HTMLTextAreaElement;
const output = document.getElementById("output") as HTMLDivElement;
const button = document.querySelector("button") as HTMLButtonElement;

button.addEventListener("click", () => {
  output.innerHTML = md.render(input.value);
});

/*

# Some Math

$\sqrt{3x-1}+(1+x)^2$

# Maxwells Equations

$\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t}
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$

$\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$ (curl of $\vec{\mathbf{E}}$ is proportional to the time derivative of $\vec{\mathbf{B}}$)

$\nabla \cdot \vec{\mathbf{B}}  = 0$



\sqrt{3x-1}+(1+x)^2

c = \pm\sqrt{a^2 + b^2}

Maxwell's Equations

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t}
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}

\nabla \cdot \vec{\mathbf{B}}  = 0

Same thing in a LaTeX array
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}


\begin{array}{c}
y_1 \\
y_2 \mathtt{t}_i \\
z_{3,4}
\end{array}

\begin{array}{c}
x' &=& &x \sin\phi &+& z \cos\phi \\
z' &=& - &x \cos\phi &+& z \sin\phi \\
\end{array}



# Maxwell's Equations


equation | description
----------|------------
$\nabla \cdot \vec{\mathbf{B}}  = 0$ | divergence of $\vec{\mathbf{B}}$ is zero
$\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$ |  curl of $\vec{\mathbf{E}}$ is proportional to the rate of change of $\vec{\mathbf{B}}$
$\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$ | wha?

![electricity](http://i.giphy.com/Gty2oDYQ1fih2.gif)
*/
