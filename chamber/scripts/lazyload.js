function loadImages (picture) {
    const imgs = picture.children;


    Array.from(imgs).forEach((img) => {
        switch (img.tagName) {
            case "IMG":
                img.setAttribute("src", img.getAttribute("data-src"));
                img.onload = () => {
                    img.removeAttribute("data-src");
                };
                break;
            case "SOURCE":
                img.setAttribute("srcset", img.getAttribute("data-srcset"));
                img.onload = () => {
                    img.removeAttribute("data-srcset");
                };
                break;
        }
    });



    
}

let pictures = document.querySelectorAll("main picture");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    pictures.forEach((picture) => {
        observer.observe(picture);
    });
} else {
    sources.forEach(loadImages);
}