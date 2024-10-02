<template>
    <dialog open>
        <slot class="dialog-content"></slot>
    </dialog>

</template>

<style scoped>
/* dialog {
    padding: 1rem;
    background-color: aliceblue;
    box-shadow: 0 2px 8px rgba(0,0,0,1);
} */
dialog {
    display: inline-block; /* Allows the dialog to size based on content */
    padding: 20px; /* Optional padding */
    background-color: #f9f9f9; /* Background color */
    border: 1px solid #ccc; /* Border for the dialog */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optional shadow */
    width: calc(200%); /* Set the width to x1.5 the content */
    max-width: 450px; /* Optional max width */
}

/* Optional styles for content inside the dialog */
.dialog-content {
    width: auto; /* Let the content size naturally */
}
</style>