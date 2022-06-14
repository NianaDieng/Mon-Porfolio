window.addEventListener('load', () => {
	budgets = JSON.parse(localStorage.getItem('budgets')) || [];
	const newbudgetForm = document.querySelector('#new-budget-form');

	newbudgetForm.addEventListener('submit', e => {
		e.preventDefault();

		const budget = {
			content: e.target.elements.content.value,
			category: e.target.elements.category.value,
		}

		budgets.push(budget);

		localStorage.setItem('budgets', JSON.stringify(budgets));

		// Reset the form
		e.target.reset();

		Displaybudgets()
	})

	Displaybudgets()
})

function Displaybudgets () {
	const budgetList = document.querySelector('#budget-list');
	budgetList.innerHTML = "";

	budgets.forEach(budget => {
		const budgetItem = document.createElement('div');
		budgetItem.classList.add('budget-item');

		const label = document.createElement('label');
		const input = document.createElement('input');
		const span = document.createElement('span');
		const content = document.createElement('div');
		const actions = document.createElement('div');
		const edit = document.createElement('button');
		const deleteButton = document.createElement('button');

		content.classList.add('budget-content');
		actions.classList.add('actions');
		edit.classList.add('edit');
		deleteButton.classList.add('delete');

		content.innerHTML = `<input type="text" value="${budget.content}" readonly>`;
		edit.innerHTML = 'Modifier';
		deleteButton.innerHTML = 'Supprimer';

		label.appendChild(input);
		label.appendChild(span);
		actions.appendChild(edit);
		actions.appendChild(deleteButton);
		budgetItem.appendChild(label);
		budgetItem.appendChild(content);
		budgetItem.appendChild(actions);

		budgetList.appendChild(budgetItem);


		edit.addEventListener('click', (e) => {
			const input = content.querySelector('input');
			input.removeAttribute('readonly');
			input.focus();
			input.addEventListener('blur', (e) => {
				input.setAttribute('readonly', true);
				budget.content = e.target.value;
				localStorage.setItem('budgets', JSON.stringify(budgets));
				Displaybudgets()
			})
		})

		deleteButton.addEventListener('click', (e) => {
			budgets = budgets.filter(t => t != budget);
			localStorage.setItem('budgets', JSON.stringify(budgets));
			Displaybudgets()
		})

	})
}