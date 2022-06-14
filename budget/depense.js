window.addEventListener('load',() =>{
    depenses=JSON.parse(localStorage.getItem('depenses')) || [];
    const newdepenseForm=document.querySelector('#new-depense-form');


    newdepenseForm.addEventListener('submit',e =>{
        e.preventDefault();

        const depense ={
            container:e.target.elements.container.value,
            categorie:e.target.elements.container.value,
        }
        depenses.push(depense);

        localStorage.setItem('depenses',JSON.stringify(depenses));

        e.target.reset();
        
        Displaydepenses()

    })
    Displaydepenses()
})


function Displaydepenses () {
     const depenseList=document.querySelector('#depense-list');
     depenseList.innerHTML="";


     depenses.forEach(depense => {
        const depenseItem=document.createElement('div');
        depenseItem.classList.add('depense-item');

        
		const label = document.createElement('label');
		const input = document.createElement('input');
		const span = document.createElement('span');
        const container=document.createElement('div');
        const movement=document.createElement('div');
        const write = document.createElement('button');
		const suppButton = document.createElement('button');


        container.classList.add('depense-content');
        movement.classList.add('movement');
        write.classList.add('edit');
        suppButton.classList.add('delete');


        container.innerHTML = `<input type="text" value="${depense.container}" readonly>`;
		write.innerHTML = 'Modifier';
		suppButton.innerHTML = 'Supprimer';

        label.appendChild(input);
		label.appendChild(span);
		movement.appendChild(write);
		movement.appendChild(suppButton);
		depenseItem.appendChild(label);
		depenseItem.appendChild(container);
		depenseItem.appendChild(movement);

		depenseList.appendChild(depenseItem);







        write.addEventListener('click', (e) => {
			const input = container.querySelector('input');
			input.removeAttribute('readonly');
			input.focus();
			input.addEventListener('blur', (d) => {
				input.setAttribute('readonly', true);
				depense.container= d.target.value;
				localStorage.setItem('depeenses', JSON.stringify(depenses));
				Displaydepenses()
			})
		})

        suppButton.addEventListener('click', (e) => {
			depenses = depenses.filter(t => t != depense);
			localStorage.setItem('depenses', JSON.stringify(depenses));
			Displaydepenses()
		})
     });
}