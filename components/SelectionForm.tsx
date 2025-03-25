import { useState } from 'react';
import styles from '../styles/SelectionForm.module.css';
import SmallButton from '../components/SmallButton';

interface SelectionFormProps {
  onGenerate: (gender: string, genre: string) => void;
}

const SelectionForm: React.FC<SelectionFormProps> = ({ onGenerate }) => {
  const [gender, setGender] = useState<string | null>(null);
  const [genre, setGenre] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gender || !genre) {
      alert('Por favor, selecciona un género y un tipo de historia.');
      return;
    }
    onGenerate(gender, genre);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="title">Elegí los aspectos básicos:</label>
      <select
        id="gender"
        value={gender || ""} 
        onChange={(e) => setGender(e.target.value)} 
        aria-label="Seleccionar género"
      >
        <option value="" disabled>Selecciona un género</option>
        <option value="femenino">Femenino</option>
        <option value="masculino">Masculino</option>
        <option value="no binario">No binario</option>
      </select>

      <select
        id="genre"
        value={genre || ""} 
        onChange={(e) => setGenre(e.target.value)} 
        aria-label="Seleccionar género literario"
      >
        <option value="" disabled>Selecciona un tipo de historia</option>
        <option value="fantasia">Fantasía</option>
        <option value="ciencia ficcion">Ciencia Ficción</option>
        <option value="historia">Historia</option>
        <option value="terror">Terror</option>
        <option value="romance">Romance</option>
      </select>

      <SmallButton type="submit">Crear Personaje</SmallButton>
    </form>
  );
};

export default SelectionForm;

