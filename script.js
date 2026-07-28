/* =========================================
   TRIPPIN - MAIN JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");


        const icon =
            menuToggle.querySelector("i");


        if (navMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

}



/* =========================================
   CLOSE MOBILE MENU
   WHEN CLICKING A NAV LINK
========================================= */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {

            navMenu.classList.remove("active");

        }


        if (menuToggle) {

            const icon =
                menuToggle.querySelector("i");


            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

});



/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = sectionId;

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        const linkTarget =
            link.getAttribute("href");


        if (
            linkTarget ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});



/* =========================================
   TRAVEL SEARCH
========================================= */

const searchForm =
    document.getElementById(
        "travelSearchForm"
    );


const searchMessage =
    document.getElementById(
        "searchMessage"
    );


if (searchForm) {

    searchForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const destination =
                document.getElementById(
                    "destinationInput"
                ).value.trim();


            const travelDate =
                document.getElementById(
                    "travelDate"
                ).value;


            const travelers =
                document.getElementById(
                    "travelers"
                ).value;



            /* Validation */

            if (!destination) {

                showSearchMessage(
                    "Please enter your destination."
                );

                return;

            }


            if (!travelDate) {

                showSearchMessage(
                    "Please select your travel date."
                );

                return;

            }


            if (!travelers) {

                showSearchMessage(
                    "Please select the number of travelers."
                );

                return;

            }



            /* Success */

            showSearchMessage(

                "✈️ Searching trips to " +
                destination +
                " for " +
                travelers +
                " traveler(s)."

            );


        }
    );

}



/* =========================================
   SEARCH MESSAGE FUNCTION
========================================= */

function showSearchMessage(message) {

    if (!searchMessage) {

        return;

    }


    searchMessage.textContent =
        message;


    searchMessage.classList.add(
        "show"
    );


    setTimeout(() => {

        searchMessage.classList.remove(
            "show"
        );

    }, 5000);

}



/* =========================================
   SMOOTH SCROLLING
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(event) {

            const targetId =
                this.getAttribute(
                    "href"
                );


            if (
                targetId === "#" ||
                targetId === ""
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );


            if (target) {

                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        }
    );

});



/* =========================================
   SET MINIMUM TRAVEL DATE
========================================= */

const travelDate =
    document.getElementById(
        "travelDate"
    );


if (travelDate) {

    const today =
        new Date()
        .toISOString()
        .split("T")[0];


    travelDate.min =
        today;

}



/* =========================================
   BUTTON HOVER EFFECT
========================================= */

const buttons =
    document.querySelectorAll(
        "button, .btn, .nav-book-btn"
    );


buttons.forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.transition =
                "0.3s ease";

        }
    );

});



/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(

    "✈️ Trippin Travel Website Loaded Successfully!"

);
/* =========================================
   DESTINATION FILTER
========================================= */

const destinationFilters =
    document.querySelectorAll(
        ".destination-filter"
    );


const destinationCards =
    document.querySelectorAll(
        ".destination-card"
    );


destinationFilters.forEach(filter => {


    filter.addEventListener(
        "click",
        () => {


            /* Remove active */

            destinationFilters.forEach(
                button => {

                    button.classList.remove(
                        "active"
                    );

                }
            );


            /* Add active */

            filter.classList.add(
                "active"
            );


            /* Selected category */

            const category =
                filter.getAttribute(
                    "data-category"
                );


            /* Filter cards */

            destinationCards.forEach(
                card => {


                    const cardCategory =
                        card.getAttribute(
                            "data-category"
                        );


                    if (
                        category === "all" ||
                        category === cardCategory
                    ) {


                        card.classList.remove(
                            "hide"
                        );


                        card.classList.add(
                            "show"
                        );


                    } else {


                        card.classList.remove(
                            "show"
                        );


                        card.classList.add(
                            "hide"
                        );

                    }

                }
            );


        }
    );

});
/* =========================================
   TRAVEL PACKAGE FILTER
========================================= */

const packageFilters =
    document.querySelectorAll(
        ".package-filter"
    );


const packageCards =
    document.querySelectorAll(
        ".package-card"
    );


packageFilters.forEach(filter => {

    filter.addEventListener(
        "click",
        () => {


            packageFilters.forEach(
                button => {

                    button.classList.remove(
                        "active"
                    );

                }
            );


            filter.classList.add(
                "active"
            );


            const category =
                filter.getAttribute(
                    "data-package-category"
                );


            packageCards.forEach(card => {


                const cardCategory =
                    card.getAttribute(
                        "data-package-category"
                    );


                if (
                    category === "all" ||
                    category === cardCategory
                ) {

                    card.classList.remove(
                        "package-hidden"
                    );

                } else {

                    card.classList.add(
                        "package-hidden"
                    );

                }

            });

        }
    );

});



/* =========================================
   PACKAGE DETAILS DATA
========================================= */

const packageData = {


    bali: {

        name:
            "Bali Paradise Escape",

        location:
            "Bali, Indonesia",

        duration:
            "7 Days / 6 Nights",

        price:
            "$899",

        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85",

        description:
            "Experience the magic of Bali with a perfect combination of tropical beaches, ancient temples, lush landscapes, and authentic Indonesian culture.",

        itinerary: [

            "Day 1: Arrival in Bali and hotel check-in",

            "Day 2: Explore Ubud and the famous rice terraces",

            "Day 3: Visit ancient temples and waterfalls",

            "Day 4: Beach day and sunset experience",

            "Day 5: Island adventure and snorkeling",

            "Day 6: Explore local markets and culture",

            "Day 7: Departure"

        ],

        included: [

            "6 nights premium hotel accommodation",

            "Daily breakfast",

            "Airport transfers",

            "Professional local guide",

            "Selected sightseeing tours"

        ],

        excluded: [

            "International flights",

            "Personal expenses",

            "Travel insurance",

            "Optional activities"

        ]

    },


    paris: {

        name:
            "Paris Romantic Escape",

        location:
            "Paris, France",

        duration:
            "5 Days / 4 Nights",

        price:
            "$1,199",

        image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",

        description:
            "Discover the romance and beauty of Paris with iconic landmarks, charming streets, world-class museums, and unforgettable French cuisine.",

        itinerary: [

            "Day 1: Arrival and Paris city tour",

            "Day 2: Eiffel Tower and Seine River cruise",

            "Day 3: Louvre Museum and historic Paris",

            "Day 4: Montmartre and local French experience",

            "Day 5: Departure"

        ],

        included: [

            "4 nights hotel accommodation",

            "Daily breakfast",

            "Airport transfers",

            "City sightseeing tour",

            "Seine River cruise"

        ],

        excluded: [

            "International flights",

            "Lunch and dinner",

            "Personal expenses",

            "Travel insurance"

        ]

    },


    switzerland: {

        name:
            "Swiss Alpine Adventure",

        location:
            "Switzerland",

        duration:
            "8 Days / 7 Nights",

        price:
            "$1,499",

        image:
            "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?auto=format&fit=crop&w=1200&q=85",

        description:
            "Explore the stunning Swiss Alps, charming mountain villages, crystal-clear lakes, and unforgettable scenic train journeys.",

        itinerary: [

            "Day 1: Arrival in Zurich",

            "Day 2: Explore Lucerne",

            "Day 3: Journey to Interlaken",

            "Day 4: Mountain adventure",

            "Day 5: Scenic train journey",

            "Day 6: Explore Swiss villages",

            "Day 7: Free day",

            "Day 8: Departure"

        ],

        included: [

            "7 nights hotel accommodation",

            "Daily breakfast",

            "Mountain excursions",

            "Scenic train experience",

            "Professional guide"

        ],

        excluded: [

            "International flights",

            "Personal expenses",

            "Travel insurance",

            "Optional activities"

        ]

    },


    maldives: {

        name:
            "Maldives Luxury Retreat",

        location:
            "Maldives",

        duration:
            "6 Days / 5 Nights",

        price:
            "$1,799",

        image:
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85",

        description:
            "Relax in paradise with a luxury Maldives escape featuring overwater villas, crystal-clear lagoons, private beaches, and unforgettable island experiences.",

        itinerary: [

            "Day 1: Arrival and luxury resort check-in",

            "Day 2: Relax at the private beach",

            "Day 3: Snorkeling and marine adventure",

            "Day 4: Island hopping experience",

            "Day 5: Sunset cruise and relaxation",

            "Day 6: Departure"

        ],

        included: [

            "5 nights luxury resort",

            "Daily breakfast",

            "Airport speedboat transfer",

            "Snorkeling experience",

            "Sunset cruise"

        ],

        excluded: [

            "International flights",

            "Travel insurance",

            "Personal expenses",

            "Additional water sports"

        ]

    }

};



/* =========================================
   PACKAGE MODAL
========================================= */

const packageModal =
    document.getElementById(
        "packageModal"
    );


const packageModalClose =
    document.getElementById(
        "packageModalClose"
    );


const detailsButtons =
    document.querySelectorAll(
        ".package-details-btn"
    );



/* OPEN MODAL */

detailsButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {


            const packageName =
                button.getAttribute(
                    "data-package"
                );


            const data =
                packageData[
                    packageName
                ];


            if (!data) {

                return;

            }


            document.getElementById(
                "modalPackageImage"
            ).src =
                data.image;


            document.getElementById(
                "modalPackageLocation"
            ).textContent =
                data.location;


            document.getElementById(
                "modalPackageName"
            ).textContent =
                data.name;


            document.getElementById(
                "modalPackageDuration"
            ).textContent =
                data.duration;


            document.getElementById(
                "modalPackagePrice"
            ).textContent =
                data.price;


            document.getElementById(
                "modalPackageDescription"
            ).textContent =
                data.description;



            /* Itinerary */

            const itinerary =
                document.getElementById(
                    "modalItinerary"
                );


            itinerary.innerHTML = "";


            data.itinerary.forEach(
                item => {

                    const li =
                        document.createElement(
                            "li"
                        );

                    li.textContent =
                        item;

                    itinerary.appendChild(
                        li
                    );

                }
            );



            /* Included */

            const included =
                document.getElementById(
                    "modalIncluded"
                );


            included.innerHTML = "";


            data.included.forEach(
                item => {

                    const li =
                        document.createElement(
                            "li"
                        );

                    li.textContent =
                        item;

                    included.appendChild(
                        li
                    );

                }
            );



            /* Excluded */

            const excluded =
                document.getElementById(
                    "modalExcluded"
                );


            excluded.innerHTML = "";


            data.excluded.forEach(
                item => {

                    const li =
                        document.createElement(
                            "li"
                        );

                    li.textContent =
                        item;

                    excluded.appendChild(
                        li
                    );

                }
            );



            packageModal.classList.add(
                "active"
            );


            document.body.style.overflow =
                "hidden";

        }
    );

});



/* CLOSE MODAL */

if (packageModalClose) {

    packageModalClose.addEventListener(
        "click",
        closePackageModal
    );

}


function closePackageModal() {

    packageModal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}



/* CLOSE WHEN CLICKING OUTSIDE */

if (packageModal) {

    packageModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                packageModal
            ) {

                closePackageModal();

            }

        }
    );

}



/* CLOSE WITH ESCAPE */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            packageModal.classList.contains(
                "active"
            )
        ) {

            closePackageModal();

        }

    }
);
/* =========================================
   OFFER COUNTDOWN TIMER
========================================= */

const countdownTimers =
    document.querySelectorAll(
        ".countdown"
    );


countdownTimers.forEach(
    countdown => {


        const endDate =
            countdown.getAttribute(
                "data-end"
            );


        const targetDate =
            new Date(
                endDate
            ).getTime();



        function updateCountdown() {


            const now =
                new Date().getTime();


            const difference =
                targetDate - now;



            /* EXPIRED */

            if (
                difference <= 0
            ) {

                countdown.innerHTML =

                    "<strong>EXPIRED</strong>";

                return;

            }



            /* TIME CALCULATION */

            const days =
                Math.floor(
                    difference /
                    (
                        1000 *
                        60 *
                        60 *
                        24
                    )
                );


            const hours =
                Math.floor(
                    (
                        difference %
                        (
                            1000 *
                            60 *
                            60 *
                            24
                        )
                    ) /
                    (
                        1000 *
                        60 *
                        60
                    )
                );


            const minutes =
                Math.floor(
                    (
                        difference %
                        (
                            1000 *
                            60 *
                            60
                        )
                    ) /
                    (
                        1000 *
                        60
                    )
                );


            const seconds =
                Math.floor(
                    (
                        difference %
                        (
                            1000 *
                            60
                        )
                    ) /
                    1000
                );



            /* UPDATE */

            const daysElement =
                countdown.querySelector(
                    ".days"
                );


            const hoursElement =
                countdown.querySelector(
                    ".hours"
                );


            const minutesElement =
                countdown.querySelector(
                    ".minutes"
                );


            const secondsElement =
                countdown.querySelector(
                    ".seconds"
                );



            daysElement.textContent =
                String(days)
                .padStart(
                    2,
                    "0"
                );


            hoursElement.textContent =
                String(hours)
                .padStart(
                    2,
                    "0"
                );


            minutesElement.textContent =
                String(minutes)
                .padStart(
                    2,
                    "0"
                );


            secondsElement.textContent =
                String(seconds)
                .padStart(
                    2,
                    "0"
                );

        }



        /* RUN IMMEDIATELY */

        updateCountdown();



        /* UPDATE EVERY SECOND */

        setInterval(
            updateCountdown,
            1000
        );

    }
);
/* =========================================
   GALLERY LIGHTBOX
========================================= */

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );


const galleryLightbox =
    document.getElementById(
        "galleryLightbox"
    );


const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );


const lightboxTitle =
    document.getElementById(
        "lightboxTitle"
    );


const lightboxLocation =
    document.getElementById(
        "lightboxLocation"
    );


const lightboxClose =
    document.getElementById(
        "lightboxClose"
    );


const lightboxPrev =
    document.getElementById(
        "lightboxPrev"
    );


const lightboxNext =
    document.getElementById(
        "lightboxNext"
    );



/* STORE CURRENT IMAGE */

let currentGalleryIndex = 0;



/* OPEN LIGHTBOX */

function openGallery(
    index
) {

    currentGalleryIndex =
        index;


    const item =
        galleryItems[
            currentGalleryIndex
        ];


    const image =
        item.querySelector(
            "img"
        );


    const title =
        item.querySelector(
            "h3"
        );


    const location =
        item.querySelector(
            "p"
        );


    lightboxImage.src =
        image.src;


    lightboxTitle.textContent =
        title.textContent;


    lightboxLocation.textContent =
        location.textContent;


    galleryLightbox.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}



/* CLOSE LIGHTBOX */

function closeGallery() {

    galleryLightbox.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}



/* NEXT IMAGE */

function showNextImage() {

    currentGalleryIndex++;


    if (
        currentGalleryIndex >=
        galleryItems.length
    ) {

        currentGalleryIndex =
            0;

    }


    openGallery(
        currentGalleryIndex
    );

}



/* PREVIOUS IMAGE */

function showPreviousImage() {

    currentGalleryIndex--;


    if (
        currentGalleryIndex < 0
    ) {

        currentGalleryIndex =
            galleryItems.length - 1;

    }


    openGallery(
        currentGalleryIndex
    );

}



/* CLICK GALLERY */

galleryItems.forEach(
    (
        item,
        index
    ) => {

        item.addEventListener(
            "click",
            () => {

                openGallery(
                    index
                );

            }
        );

    }
);



/* CLOSE BUTTON */

lightboxClose.addEventListener(
    "click",
    closeGallery
);



/* NEXT BUTTON */

lightboxNext.addEventListener(
    "click",
    showNextImage
);



/* PREVIOUS BUTTON */

lightboxPrev.addEventListener(
    "click",
    showPreviousImage
);



/* CLOSE WHEN CLICKING BACKGROUND */

galleryLightbox.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            galleryLightbox
        ) {

            closeGallery();

        }

    }
);



/* KEYBOARD CONTROLS */

document.addEventListener(
    "keydown",
    (event) => {


        if (
            !galleryLightbox.classList.contains(
                "active"
            )
        ) {

            return;

        }



        if (
            event.key ===
            "Escape"
        ) {

            closeGallery();

        }



        if (
            event.key ===
            "ArrowRight"
        ) {

            showNextImage();

        }



        if (
            event.key ===
            "ArrowLeft"
        ) {

            showPreviousImage();

        }

    }
);
/* =========================================
   CUSTOMER REVIEWS CAROUSEL
========================================= */


/* REVIEW DATA */

const reviews = [

    {

        name:
            "Sophia Williams",

        location:
            "New York, USA",

        image:
            "https://randomuser.me/api/portraits/women/44.jpg",

        text:
            "Trippin made our Bali vacation absolutely unforgettable. Everything was perfectly organized and the destinations were breathtaking.",

        trip:
            "Bali Escape"

    },


    {

        name:
            "Daniel Carter",

        location:
            "London, UK",

        image:
            "https://randomuser.me/api/portraits/men/32.jpg",

        text:
            "Our Switzerland trip was incredible. The planning was smooth, the hotels were excellent, and every day brought a new adventure.",

        trip:
            "Swiss Alpine Adventure"

    },


    {

        name:
            "Emma Johnson",

        location:
            "Toronto, Canada",

        image:
            "https://randomuser.me/api/portraits/women/65.jpg",

        text:
            "I had the most relaxing holiday in the Maldives. Trippin helped us create memories that we will never forget.",

        trip:
            "Maldives Luxury Escape"

    },


    {

        name:
            "Lucas Anderson",

        location:
            "Sydney, Australia",

        image:
            "https://randomuser.me/api/portraits/men/46.jpg",

        text:
            "From booking to the final day, everything was seamless. The experience felt premium and completely stress-free.",

        trip:
            "World Explorer Package"

    }

];



/* CURRENT REVIEW */

let currentReview = 0;



/* ELEMENTS */

const reviewImage =
    document.getElementById(
        "reviewImage"
    );


const reviewName =
    document.getElementById(
        "reviewName"
    );


const reviewLocation =
    document.getElementById(
        "reviewLocation"
    );


const reviewText =
    document.getElementById(
        "reviewText"
    );


const reviewTrip =
    document.getElementById(
        "reviewTrip"
    );


const reviewCard =
    document.getElementById(
        "reviewCard"
    );


const reviewPrev =
    document.getElementById(
        "reviewPrev"
    );


const reviewNext =
    document.getElementById(
        "reviewNext"
    );


const reviewDots =
    document.querySelectorAll(
        ".review-dot"
    );



/* SHOW REVIEW */

function showReview(
    index
) {


    const review =
        reviews[index];


    /* SMALL FADE EFFECT */

    reviewCard.style.opacity =
        "0";


    reviewCard.style.transform =
        "translateY(10px)";



    setTimeout(
        () => {


            reviewImage.src =
                review.image;


            reviewName.textContent =
                review.name;


            reviewLocation.textContent =
                review.location;


            reviewText.textContent =
                review.text;


            reviewTrip.textContent =
                review.trip;



            /* UPDATE DOTS */

            reviewDots.forEach(
                dot => {

                    dot.classList.remove(
                        "active"
                    );

                }
            );


            reviewDots[index]
                .classList.add(
                    "active"
                );



            /* SHOW CARD */

            reviewCard.style.opacity =
                "1";


            reviewCard.style.transform =
                "translateY(0)";


        },

        250

    );

}



/* NEXT REVIEW */

function nextReview() {


    currentReview++;


    if (
        currentReview >=
        reviews.length
    ) {

        currentReview =
            0;

    }


    showReview(
        currentReview
    );

}



/* PREVIOUS REVIEW */

function previousReview() {


    currentReview--;


    if (
        currentReview < 0
    ) {

        currentReview =
            reviews.length - 1;

    }


    showReview(
        currentReview
    );

}



/* NEXT BUTTON */

reviewNext.addEventListener(
    "click",
    nextReview
);



/* PREVIOUS BUTTON */

reviewPrev.addEventListener(
    "click",
    previousReview
);



/* DOT NAVIGATION */

reviewDots.forEach(
    (
        dot,
        index
    ) => {


        dot.addEventListener(
            "click",
            () => {


                currentReview =
                    index;


                showReview(
                    currentReview
                );


            }
        );

    }
);



/* AUTO SLIDER */

let reviewInterval =
    setInterval(
        nextReview,
        5000
    );



/* PAUSE WHEN MOUSE IS OVER CARD */

reviewCard.addEventListener(
    "mouseenter",
    () => {

        clearInterval(
            reviewInterval
        );

    }
);



/* RESUME AFTER MOUSE LEAVES */

reviewCard.addEventListener(
    "mouseleave",
    () => {

        reviewInterval =
            setInterval(
                nextReview,
                5000
            );

    }
);
/* =========================================
   ANIMATED STATISTICS COUNTERS
========================================= */


const counters =
    document.querySelectorAll(
        ".counter"
    );


let countersStarted =
    false;



/* START COUNTERS */

function startCounters() {


    if (
        countersStarted
    ) {

        return;

    }


    countersStarted =
        true;



    counters.forEach(
        counter => {


            const target =
                Number(
                    counter.getAttribute(
                        "data-target"
                    )
                );


            let current =
                0;


            const increment =
                target / 100;



            function updateCounter() {


                current +=
                    increment;


                if (
                    current <
                    target
                ) {


                    counter.textContent =
                        Math.ceil(
                            current
                        );


                    requestAnimationFrame(
                        updateCounter
                    );


                } else {


                    counter.textContent =
                        target.toLocaleString();


                }

            }


            updateCounter();


        }
    );

}



/* =========================================
   START WHEN ABOUT SECTION IS VISIBLE
========================================= */

const aboutSection =
    document.querySelector(
        ".about-section"
    );



if (
    aboutSection
) {


    const aboutObserver =
        new IntersectionObserver(

            entries => {


                entries.forEach(
                    entry => {


                        if (
                            entry.isIntersecting
                        ) {


                            startCounters();


                            aboutObserver.unobserve(
                                entry.target
                            );


                        }

                    }
                );


            },

            {

                threshold:
                    0.25

            }

        );


    aboutObserver.observe(
        aboutSection
    );

}
/* =========================================
   CONTACT FORM VALIDATION
========================================= */


const contactForm =
    document.getElementById(
        "contactForm"
    );


const formNotification =
    document.getElementById(
        "formNotification"
    );


const notificationTitle =
    document.getElementById(
        "notificationTitle"
    );


const notificationMessage =
    document.getElementById(
        "notificationMessage"
    );


const notificationClose =
    document.getElementById(
        "notificationClose"
    );



/* INPUTS */

const contactName =
    document.getElementById(
        "contactName"
    );


const contactEmail =
    document.getElementById(
        "contactEmail"
    );


const contactPhone =
    document.getElementById(
        "contactPhone"
    );


const contactDestination =
    document.getElementById(
        "contactDestination"
    );


const contactMessage =
    document.getElementById(
        "contactMessage"
    );



/* SHOW NOTIFICATION */

function showNotification(
    title,
    message,
    isError = false
) {


    notificationTitle.textContent =
        title;


    notificationMessage.textContent =
        message;


    formNotification.classList.toggle(
        "error",
        isError
    );


    formNotification.classList.add(
        "show"
    );


    setTimeout(
        () => {

            formNotification.classList.remove(
                "show"
            );

        },

        5000

    );

}



/* CLOSE NOTIFICATION */

notificationClose.addEventListener(
    "click",
    () => {

        formNotification.classList.remove(
            "show"
        );

    }
);



/* SHOW ERROR */

function showError(
    input,
    errorElement,
    message
) {


    input.parentElement.classList.add(
        "error"
    );


    input.parentElement.classList.remove(
        "success"
    );


    errorElement.textContent =
        message;

}



/* SHOW SUCCESS */

function showSuccess(
    input,
    errorElement
) {


    input.parentElement.classList.remove(
        "error"
    );


    input.parentElement.classList.add(
        "success"
    );


    errorElement.textContent =
        "";

}



/* EMAIL VALIDATION */

function isValidEmail(
    email
) {


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    return emailPattern.test(
        email
    );

}



/* PHONE VALIDATION */

function isValidPhone(
    phone
) {


    const phonePattern =
        /^[0-9+\-\s()]{7,20}$/;


    return phonePattern.test(
        phone
    );

}



/* FORM SUBMIT */

contactForm.addEventListener(
    "submit",
    (event) => {


        event.preventDefault();


        let isValid =
            true;



        /* NAME */

        const nameError =
            document.getElementById(
                "nameError"
            );


        if (
            contactName.value.trim() === ""
        ) {


            showError(

                contactName,

                nameError,

                "Please enter your name."

            );


            isValid =
                false;


        } else {


            showSuccess(

                contactName,

                nameError

            );

        }



        /* EMAIL */

        const emailError =
            document.getElementById(
                "emailError"
            );


        if (
            contactEmail.value.trim() === ""
        ) {


            showError(

                contactEmail,

                emailError,

                "Please enter your email."

            );


            isValid =
                false;


        } else if (
            !isValidEmail(
                contactEmail.value.trim()
            )
        ) {


            showError(

                contactEmail,

                emailError,

                "Please enter a valid email."

            );


            isValid =
                false;


        } else {


            showSuccess(

                contactEmail,

                emailError

            );

        }



        /* PHONE */

        const phoneError =
            document.getElementById(
                "phoneError"
            );


        if (
            contactPhone.value.trim() === ""
        ) {


            showError(

                contactPhone,

                phoneError,

                "Please enter your phone number."

            );


            isValid =
                false;


        } else if (
            !isValidPhone(
                contactPhone.value.trim()
            )
        ) {


            showError(

                contactPhone,

                phoneError,

                "Please enter a valid phone number."

            );


            isValid =
                false;


        } else {


            showSuccess(

                contactPhone,

                phoneError

            );

        }



        /* DESTINATION */

        const destinationError =
            document.getElementById(
                "destinationError"
            );


        if (
            contactDestination.value.trim() === ""
        ) {


            showError(

                contactDestination,

                destinationError,

                "Please enter your destination."

            );


            isValid =
                false;


        } else {


            showSuccess(

                contactDestination,

                destinationError

            );

        }



        /* MESSAGE */

        const messageError =
            document.getElementById(
                "messageError"
            );


        if (
            contactMessage.value.trim() === ""
        ) {


            showError(

                contactMessage,

                messageError,

                "Please tell us about your trip."

            );


            isValid =
                false;


        } else if (
            contactMessage.value.trim().length < 10
        ) {


            showError(

                contactMessage,

                messageError,

                "Message must be at least 10 characters."

            );


            isValid =
                false;


        } else {


            showSuccess(

                contactMessage,

                messageError

            );

        }



        /* SUCCESS */

        if (
            isValid
        ) {


            showNotification(

                "Request Sent!",

                "Thank you! Your travel request has been received."

            );


            contactForm.reset();


            /* REMOVE SUCCESS STYLES */

            document
                .querySelectorAll(
                    ".input-wrapper"
                )
                .forEach(
                    wrapper => {

                        wrapper.classList.remove(
                            "success"
                        );

                    }
                );


        } else {


            showNotification(

                "Check Your Details",

                "Please fix the highlighted fields and try again.",

                true

            );

        }


    }
);
/* =========================================
   SCROLL TO TOP BUTTON
========================================= */


const scrollTopBtn =
    document.getElementById(
        "scrollTopBtn"
    );



/* SHOW / HIDE BUTTON */

window.addEventListener(
    "scroll",
    () => {


        if (
            window.scrollY > 500
        ) {


            scrollTopBtn.classList.add(
                "show"
            );


        } else {


            scrollTopBtn.classList.remove(
                "show"
            );


        }

    }
);



/* SCROLL TO TOP */

scrollTopBtn.addEventListener(
    "click",
    () => {


        window.scrollTo({

            top: 0,

            behavior:
                "smooth"

        });

    }
);