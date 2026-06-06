export default function InteractiveCard() 
{
    return (
        <div className="interactive-card" 
        style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', textAlign: 'center' }} 
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor ='black'} 
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'darkblue'}>
            <h2>Interactive Card</h2>
            <p>Tekst</p>
            <button onClick={() => alert('Button clicked!')}>Przycisk</button>
        </div>
    );
}