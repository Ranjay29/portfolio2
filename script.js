    // ABOUT section elements
    const image2 = document.getElementById("image2");
    const paragraph = document.getElementById("paragraph");

    // MY WORKS cards
    const cards = document.querySelectorAll("#card1, #card2, #card3");

    // Initial hidden state
    image2.style.opacity = "0";
    paragraph.style.opacity = "0";

    cards.forEach(card => {
        card.classList.add("hidden");
    });

    // Scroll event
    window.addEventListener("scroll", () => {

        const aboutSection = document.getElementById("About");
        const aboutTop = aboutSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        /* ABOUT animation */
        if (aboutTop < screenHeight - 150) {
            image2.style.opacity = "1";
            image2.style.transform = "translateX(0)";

            paragraph.style.opacity = "1";
            paragraph.style.transform = "translateX(0)";
        }

        const cardImages = document.querySelectorAll("#card img");

        cardImages.forEach(img => {
            img.addEventListener("click", () => {
            window.open(img.src, "_blank");
        });
    });

        /* MY WORKS cards animation */
        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < screenHeight - 100) {
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 250); // one by one animation
            }
        });

    });

    const skills = document.querySelectorAll(".skill");
    const skillSection = document.getElementById("Skills");

    let skillsAnimated = false; // prevent re-animation

    window.addEventListener("scroll", () => {
        const sectionTop = skillSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 150 && !skillsAnimated) {

            skills.forEach((skill, index) => {
                setTimeout(() => {
                    skill.classList.add("show");
                }, index * 300); // one-by-one animation
            });

            // Trigger progress bar animations
            document.getElementById("i1,i2,i3,i4").style.animationPlayState = "running";
            skillsAnimated = true;
        }
    });

  // Select elements
  const form = document.querySelector("form");
  const contactText = document.getElementById("contacttext");
  const labels = document.querySelectorAll(".l1");
  const button = document.getElementById("Message");

  // Add initial animation classes
  form.classList.add("animate", "slide-left");
  contactText.classList.add("animate", "slide-right");
  labels.forEach(label => label.classList.add("animate"));

  // Intersection Observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  observer.observe(form);
  observer.observe(contactText);

  labels.forEach((label, index) => {
    setTimeout(() => {
      observer.observe(label);
    }, index * 150);
  });

  // Button click animation
  button.addEventListener("click", () => {
    button.style.transform = "scale(0.9)";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 150);
  });

