import "./styles.css"

export const Display = () => {
    return (
        <>
            <div className="container">
                <h1 target="d-h1">display: block;</h1>
                <section className="grid">
                    <div className="item">1</div>
                    <div className="item">2</div>
                    <div className="item">3</div>
                    <div className="item">4</div>
                </section>
            </div>

            <div className="container">
                <h1 target="d-h1">display: grid;</h1>
                <section className="grid">
                    <div className="item">1</div>
                    <div className="item">2</div>
                    <div className="item">3</div>
                    <div className="item">4</div>
                </section>
            </div>

            <div className="container">
                <h1 target="d-h1">grid-template-columns: 200px 200px;</h1>
                <section className="container grid grid-template-columns">
                    <div className="item">1</div>
                    <div className="item">2</div>
                    <div className="item">3</div>
                    <div className="item">4</div>
                </section>
            </div>

            <div className="container">
                <h1 target="d-h1">grid-template-columns: 1fr 2fr 1fr;</h1>
                <section className="container grid grid-template-columns-3">
                    <div className="item">1</div>
                    <div className="item">2</div>
                    <div className="item">3</div>
                    <div className="item">4</div>
                    <div className="item">5</div>
                    <div className="item">6</div>
                </section>
            </div>

            <div className="container">
                <h1 target="d-h1">subgrid</h1>
                <section className="container grid grid-template-columns-3">
                    <div className="item">1</div>
                    <div className="item">2</div>
                    <div className="item">3</div>
                    <div className="item">4</div>
                    <div className="item subgrid">
                        <div>5.1</div>
                        <div>5.2</div>
                        <div>5.3</div>
                    </div>
                    <div className="item">6</div>
                </section>
            </div>
        </>
    )
}