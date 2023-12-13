import estilos from './Main.module.css'
function Main() {
    return ( 
        <main className={estilos.main}>
            <h1 className={estilos.titulo}>Spending - Last 7 days</h1>
            <div>
                {/* Chart */}
            </div>
            <hr />
            <div className={estilos.contenedorBajo}>
                <div>
                    <small className={estilos.small}>Total this month</small>
                    <p className={estilos.total}>$478.33</p>
                </div>
                <div className={estilos.contenedorSegundo}>
                    <p>+2.4%</p>
                    <small className={estilos.small}>from last month</small>
                </div>
            </div>
        </main>
     );
}

export default Main;