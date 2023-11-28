
const accordionContent = document.querySelectorAll('.accordion_content');

accordionContent.forEach((item, index) => {
    let header = item.querySelector('.header');

    header.addEventListener('click', () => {
        item.classList.toggle('open');

        let description = item.querySelector('.description');
        
        if(item.classList.contains('open')){
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector('i').classList.replace('fa-plus', 'fa-minus');
        }
        else{
            description.style.height = '0';
            item.querySelector('i').classList.replace('fa-minus', 'fa-plus');
        }

        removeOpen(index);
    })
});

let removeOpen = function(index1){

    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove('open');

            let des = item2.querySelector('.description');
            des.style.height = '0';

            item2.querySelector('i').classList.replace('fa-minus', 'fa-plus');
        }
    });
};
