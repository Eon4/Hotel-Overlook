export function ErrorPage() {
    console.log('ErrorPage component rendered');
    
    return (
      <>
        <h1>Fejl 404</h1>
        <p>Siden findes ikke</p>
        <h4><Link to="/forside">Kom tilbage til forsiden</Link></h4>
      </>
    );
  }
  