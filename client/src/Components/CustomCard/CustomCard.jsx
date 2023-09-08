import React from 'react';
import s from '../CustomCard/CustomCard.module.css'; // Asegúrate de crear este archivo CSS para los estilos

const CustomCard = ({ text, onClose,color }) => {
    
    return (
        <div className={color==='green' ? s.customCardGreen : s.customCardRed}>
        <div className={s.cardContent}>
            <p>{text}</p>
            <button onClick={onClose}>Cerrar</button>
        </div>
        </div>
    );
}

export default CustomCard;
