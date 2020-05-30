const handleImgsEdit = {
    handleEvent(e) {
        const target = e.target;

        switch(e.type) {
            case 'click':
                if(target.classList.contains('js-remove-image')) {
                    const image = target.closest('.js-image-wrapper');
                    image.remove()
                };
            break;

            case 'dragenter':
                if(target.classList.contains('js-image-wrapper')) {
                    target.insertAdjacentHTML('beforebegin', `
                    <div class="separator" width="5px"></div>
                    `)
                }
            break;

            case 'dragleave': 
                if(target.classList.contains('js-image-wrapper')) {
                    const separator = document.querySelector('.separator');
                    separator.remove();
                }
            break;

            case 'drop': 
                const id = e.dataTransfer.getData('text');
                const draggableElement = document.getElementById(id);
                const container = document.querySelector('.separator');
                container.replaceWith(draggableElement)

                e.dataTransfer.clearData();
            break;

            case 'dragover':
                e.preventDefault();
            break;

            case 'dragstart':
                if(target.classList.contains('js-image-wrapper')) {
                    e.dataTransfer.setData('text/plain', e.target.id);
                }
            break;
        }
    }
}


export {handleImgsEdit};