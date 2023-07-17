import cities from "../data/cities.json";

export const PageWelcome = () => {
	const selectElement = document.getElementById(
		"stadtSelect"
	) as HTMLSelectElement;

	return /*html*/ `
	<div class="page pageWelcome">
	  <section class="bedarfsrechner">
		<h2>Bedarfsrechner</h2>
		<form action="">
		  <label for="stadt">Stadt</label>
		  <select name="stadt" id="stadt">
			${cities.map((city) => {
				return `<option value="${city.name}">${city.name}</option>`;
			}).join('')}
		  </select>
		  <!-- <h2 id="waren1">0</h2>
		  <input type="number">
		  <h2 id="waren2">0</h2>
		  <input type="number">
		  <h2 id="waren3">0</h2>
		  <input type="number">
		  <h2 id="waren4">0</h2>
		  <input type="number">
		  <h2 id="waren5">0</h2> -->
		</form>
	  </section>
	</div>
  `;
};

export const attachPageWelcomeEvents = () => {
	const stadtElem = document.getElementById("stadt") as HTMLSelectElement;

	stadtElem.addEventListener("change", () => {

		const city = stadtElem.value;
		alert(city)
		// const selectedCity = cities.find(
		// 	(city) => city.name === selectElement.value
		// );

		// if (selectedCity) {
		// 	waren1Element.textContent = selectedCity.waren[0];
		// 	waren2Element.textContent = selectedCity.waren[1];
		// 	waren3Element.textContent = selectedCity.waren[2];
		// 	waren4Element.textContent = selectedCity.waren[3];
		// 	waren5Element.textContent = selectedCity.waren[4];
		// }
	});
};
