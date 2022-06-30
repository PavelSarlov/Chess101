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

        if (document.querySelector(".flag-bg")) {
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
            <button id="save-button" type="button" class="button">Save</button>
            `;
        } else {
            filter.innerHTML = `
            <section class="field">
                <label>Максимален рейтинг</label>
                <select id="maximum-rating-select">
                </select>
            </section class="field">
            <section class="field">
                <label>Минимален рейтинг</label>
                <select id="minimum-rating-select">
                </select>
            </section class="field">
            <section class="field">
                <label>Форма на игра</label>
                <select id="mode-select">
                </select>
            </section>
            <section class="field">
                <label>Времеви формат</label>
                <select id="time-format-select">
                </select>
            </section class="field">
            <section class="starts-with-radio">
                <label>Започва с:</label>
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
            <button id="save-button" type="button" class="button">Обнови</button>
            `;
        }

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

        filter.querySelectorAll('input[type*="radio"]').forEach((d) =>
            d.addEventListener("click", (event) => {
                for (let el of document.getElementsByClassName("radio")) {
                    el.classList.remove("selected");
                }
                if (event.currentTarget.checked) {
                    event.currentTarget.parentNode.classList.add("selected");
                }
            })
        );

        filter.querySelector("#save-button").addEventListener("click", () => {
            filter.parentNode.removeChild(filter);
        });

        return filter;
    }

    function popCreateLobby() {
        let wrapper = document.createElement("div");
        if (document.querySelector(".flag-bg")) {
            wrapper.innerHTML = `
            <div id="wrapper" class="wrapper">
                <section class="createLobby">
                    <header>Create a Lobby</header>
                    <section class="field">
                        <label>Time format</label>
                        <select id="time-format-select">
                        </select>
                    </section class="field">
                    <section class="field">
                        <label>Mode</label>
                        <select id="mode-select">
                        </select>
                    </section class="field">
                    <section class="starts-with-radio">
                        <label>Start with:</label>
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
                    <div>
                        <button type="button" id="create" class="button">Create</button>
                        <button type="button" id="cancel" class="button">Cancel</button>
                    </div>
                </section>
            </div>
            `;
        } else {
            wrapper.innerHTML = `
            <div id="wrapper" class="wrapper">
                <section class="createLobby">
                    <header>Създай лоби</header>
                    <section class="field">
                        <label>Времеви формат</label>
                        <select id="time-format-select">
                        </select>
                    </section class="field">
                    <section class="field">
                        <label>Формат на игра</label>
                        <select id="mode-select">
                        </select>
                    </section class="field">
                    <section class="starts-with-radio">
                        <label>Започни с:</label>
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
                    <div>
                        <button type="button" id="create" class="button">Създай</button>
                        <button type="button" id="cancel" class="button">Отказ</button>
                    </div>
                </section>
            </div>
            `;
        }
        let createLobby = wrapper.children[0];

        let modes = createLobby.querySelector("#mode-select");
        for (let mode of filterModes) {
            let option = document.createElement("option");
            option.innerHTML = mode;
            modes.appendChild(option);
        }

        let timeFormats = createLobby.querySelector("#time-format-select");
        for (let timeFormat of filterTimeFormats) {
            let option = document.createElement("option");
            option.innerHTML = timeFormat;
            timeFormats.appendChild(option);
        }

        createLobby.querySelectorAll('input[type*="radio"]').forEach((d) =>
            d.addEventListener("click", (event) => {
                for (let el of document.getElementsByClassName("radio")) {
                    el.classList.remove("selected");
                }
                if (event.currentTarget.checked) {
                    event.currentTarget.parentNode.classList.add("selected");
                }
            })
        );

        createLobby.querySelector("#create").addEventListener("click", () => {
            if (document.querySelector("flag-bg")) {
                window.location = "../html/game.html";
            } else {
                window.location = "../html/game-bg.html";
            }
        });
        createLobby.querySelector("#cancel").addEventListener("click", () => {
            if (createLobby.parentNode) {
                createLobby.parentNode.removeChild(createLobby);
            }
        });

        return createLobby;
    }

    document.getElementById("settings").addEventListener("click", (event) => {
        if (!event.currentTarget.parentNode.querySelector(".filter")) {
            event.currentTarget.parentNode.appendChild(popFilter());
        }
    });

    document
        .getElementById("createLobby")
        .addEventListener("click", (event) => {
            if (!document.querySelector("#wrapper")) {
                document.documentElement.appendChild(popCreateLobby());
            }
        });

    let table = document.querySelector(".table");
    for (let i = 0; i < 50; i++) {
        let row = document.createElement("div");
        row.innerHTML = `
        <a href="../html/game.html">
            <div class="row">
                <div>name1</div>
                <div>15 + 0</div>
                <div>Standard</div>
                <div>
                    <img src="../img/white-king.png" class="king" />
                </div>
            </div>
        </a>
        `;

        table.appendChild(row.querySelector("a"));
    }
})();
