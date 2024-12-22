const Features = ({ data }) => {
    return (
        <div className="feature-item">
            <img src={data.img} alt={data.title} className="feature-icon" />
            <h3 className="feature-item-title">{data.title}</h3>
            <p>{data.description}</p>
        </div>
    )

    <header>
      
      <Menu />

      try {
        setData(api.loadData());
        const sortedData = api.loadData();
        setLast(sortedData.events.sort((evtA, evtB) =>
          new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
        )[0]) // on récupére le dernier événement du tableau d'événement trié
      } catch (err) {
        setError(err);
      }

    </header>

   
}

export default Features