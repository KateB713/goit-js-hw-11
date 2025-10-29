import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
} from "./js/render-functions.js";

const form = document.querySelector(".form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const searchQuery = event.currentTarget.elements["search-text"].value.trim();

    if (!searchQuery) {
        iziToast.warning({
            title: "Ooops!",
            message: "Please enter a search query before searching!",
            position: "topRight",
        });
        return;
    }

    clearGallery();
    showLoader();

    try {
        const data = await getImagesByQuery(searchQuery);

        if (data.hits.length === 0) {
            iziToast.info({
                title: "Ooops!",
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
            });
            return;
        }

        createGallery(data.hits);
        form.reset();

    } catch (error) {
        iziToast.error({
            title: "Error!",
            message: "Something went wrong. Please try again!",
            position: "topRight",
        });
    } finally {
        hideLoader();
    }
});
