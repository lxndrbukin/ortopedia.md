import { type JSX } from 'react';

const FEATURES = [
  {
    title: 'Sistemul Shock Point',
    text: 'Sistemul propriu ORTOPEDIA, creat pentru sănătatea piciorului în creștere.',
  },
  {
    title: 'Materiale igienice, testate',
    text: 'Materiale importate, verificate tehnologic, care lasă piciorul să respire.',
  },
  {
    title: 'Piele naturală',
    text: 'Modele din piele, inclusiv colecția Perlina, cu design italian.',
  },
  {
    title: 'Probă în magazin',
    text: 'Veniți cu copilul și alegeți mărimea potrivită împreună cu consultantul.',
  },
];

export default function WhyOrtopedia(): JSX.Element {
  return (
    <section className='why'>
      <div className='container why-inner'>
        <div className='why-intro'>
          <span className='why-eyebrow'>De ce ORTOPEDIA</span>
          <h2 className='why-title'>Creată pentru piciorul care crește.</h2>
          <p className='why-text'>
            Fiecare pereche ORTOPEDIA pornește de la sănătatea piciorului
            copilului. Recomandăm întotdeauna proba în magazin și consultul
            medicului ortoped atunci când e nevoie.
          </p>
          <a href='#' className='why-link'>
            Citește specificațiile anatomice și ortopedice →
          </a>
        </div>
        <ol className='why-grid'>
          {FEATURES.map((feature, index) => (
            <li key={feature.title} className='feature-card'>
              <span className='feature-card-number' aria-hidden='true'>
                {index + 1}
              </span>
              <span className='feature-card-title'>{feature.title}</span>
              <span className='feature-card-text'>{feature.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
