export default function Footer() {
  // On génère l'année courante
  const anneeCourante = new Date().getFullYear();

  return (
    <div className="Footer">
      © Copyright, {anneeCourante} - propulsé par React
    </div>
  );
}
