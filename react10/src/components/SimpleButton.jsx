function SimpleButton({ label, onClick, color }) { 
    return (
        <button 
            onClick={onClick} 
            style={{ backgroundColor: color, padding: '10px 20px', border: 'none', borderRadius: '5px', color: '#fff', cursor: 'pointer' }}
        >
            {label}
        </button>
    );
} 

export default SimpleButton;