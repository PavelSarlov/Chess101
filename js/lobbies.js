(() => {
    let filterRatings = (() => {
        let arr = [];
        for (let i = 600; i < 3000; i += 200) {
            arr.push(i);
        }
        return arr;
    })();

    let filterModes = [
        "Standard",
        "King of the hill",
        "Atomic",
        "Crazyhouse",
        "Three-check",
        "Horde",
        "Chess960",
        "Antichess",
        "Racing Kings",
    ];

    let filterTimeFormats = [
        "Bullet (< 3 min)",
        "Blitz (< 8 min)",
        "Rapid (< 25 min)",
        "Classical (< 360 min)",
    ];

    function popFilter() {
        let filter = document.createElement("div");
        filter.classList.add("filter");
        filter.innerHTML = `
            <section class="field">
                <label>Maximum rating</label>
                <select id="maximum-rating-select">
                </select>
            </section class="field">
            <section class="field">
                <label>Minimum rating</label>
                <select id="minimum-rating-select">
                </select>
            </section class="field">
            <section class="field">
                <label>Mode</label>
                <select id="mode-select">
                </select>
            </section>
            <section class="field">
                <label>Time format</label>
                <select id="time-format-select">
                </select>
            </section class="field">
            <section class="starts-with-radio">
                <label>Starts with:</label>
                <section class="starts-with-radio-btns">
                    <div class="radio">
                        <label for="starts-with-white" for="starts-with"><img src="../img/wK.svg"></label>
                        <input id="starts-with-white" type="radio" name="starts-with" value="white">
                    </div>
                    <div class="radio">
                        <label for="starts-with-whichever" for="starts-with"><img src="../img/wbK.svg"></label>
                        <input id="starts-with-whichever" type="radio" name="starts-with" value="whichever">
                    </div>
                    <div class="radio">
                        <label for="starts-with-black"><img src="../img/bK.svg"></label>
                        <input id="starts-with-black" type="radio" name="starts-with" value="black">
                    </div>
                </section>
            </section>
            <button id="save-button" type="button">Save</button>
        `;

        let ratings = filter.querySelector("#maximum-rating-select");
        for (let rating of filterRatings) {
            let option = document.createElement("option");
            option.innerHTML = rating;
            ratings.appendChild(option);
        }
        ratings = filter.querySelector("#minimum-rating-select");
        for (let rating of filterRatings) {
            let option = document.createElement("option");
            option.innerHTML = rating;
            ratings.appendChild(option);
        }

        let modes = filter.querySelector("#mode-select");
        for (let mode of filterModes) {
            let option = document.createElement("option");
            option.innerHTML = mode;
            modes.appendChild(option);
        }

        let timeFormats = filter.querySelector("#time-format-select");
        for (let timeFormat of filterTimeFormats) {
            let option = document.createElement("option");
            option.innerHTML = timeFormat;
            timeFormats.appendChild(option);
        }

        let inputs = filter.querySelectorAll('input[type*="radio"]').forEach(d => d.addEventListener('click', (event) => {
            for (let el of document.getElementsByClassName('radio')) {
                el.classList.remove('selected');
            }
            if (event.currentTarget.checked) {
                event.currentTarget.parentNode.classList.add('selected');
            }
        }));

        filter.querySelector("#save-button").addEventListener("click", () => {
            filter.parentNode.removeChild(filter);
        });

        return filter;
    }

    // function popCreateGame {
    //     let wrapper = document.createElement("div");
    // }
    document.documentElement.append(popFilter());
})();
