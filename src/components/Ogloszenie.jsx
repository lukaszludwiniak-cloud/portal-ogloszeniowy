function Ogloszenie({ ogloszenie }) {
    // Definiujemy styl w zależności od wartości zmiennej dostepny
    const stylDostepnosci = {
        color: ogloszenie.dostepny ? "#16a34a" : "#dc2626",
        fontWeight: "bold"
    };

    return (
        <article className="karta">
            <h2>{ogloszenie.nazwa}</h2>
            <p className="cena">Cena: {ogloszenie.cena} PLN</p>
            <p>Kategoria: {ogloszenie.kategoria}</p>
            <p className="opis">{ogloszenie.opis}</p>
            <p style={stylDostepnosci}>
                {ogloszenie.dostepny ? "Dostępny" : "Niedostępny"}
            </p>
            <button className="przycisk-szczegoly">Zobacz szczegóły</button>
        </article>
    );
}

export default Ogloszenie;