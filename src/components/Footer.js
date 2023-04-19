import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        R. Dr. Frederico Wolffenbuttel, 452 
        
        </p>
        <p className='footer-subscription-text'>
        contato@providaclin.com.br
        · +55 51 3592-3434
        </p>
        {/* <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div> */}
      </section>
      <div class='footer-links'>
      <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Vacinas</h2>
            <Link to='/'>Tuberculose</Link>
            <Link to='/'>Febre Tifoide</Link>
            <Link to='/'>Hepatite A</Link>
            <Link to='/'>Herpes Zoster</Link>
            <Link to='/'>HPV Quadrivalente</Link>
            <Link to='/'>Meningite B</Link>
            <Link to='/'>Pneumonia 23 Valente </Link>
            <Link to='/'>Varicela</Link>
            <Link to='/'>Dengue</Link>
            <Link to='/'>Gripe </Link>
            <Link to='/'>Hepatite A e B combinada </Link>
            <Link to='/'>Pentavalente Acelular</Link>
            <Link to='/'>Rotavírus</Link>
            <Link to='/'>Febre Amarela</Link>
            <Link to='/'>Hepatite B</Link>
            <Link to='/'>HPV Novavalente</Link>
            <Link to='/'>Meningite ACWY</Link>
            <Link to='/'>Pneumonia 13 Valente </Link>
            <Link to='/'>Haemophilus Ingluenzae Tipo B "HIB" </Link>
            <Link to='/'>Tetra Viral- Sarampo, Caxumba, Rubéola, Varicela"Catapora"</Link>
            <Link to='/'>TrÍplice Viral - Sarampo, Caxumba, Rubéola "SCR"</Link>
          </div> 
          </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Tratamentos Faciais</h2>
            {/* <Link to='/sign-up'>How it works</Link> */}
            <Link to='/'>Rinomodelação</Link>
            <Link to='/'>Rejuvenecimento Facial</Link>
            <Link to='/'>Preenchimento Labial</Link>
            <Link to='/'>Melasma</Link>
            <Link to='/'>Botox</Link>
            <Link to='/'>Limpeza de Pele </Link>
            <Link to='/'>Peeling </Link>
            <Link to='/'>Preenchimento Ácido Hialurônico</Link>
            <Link to='/'>Ultrassom Microfocado</Link>
            <Link to='/'>Harmonização Facial </Link>
            <Link to='/'>Fios de PDO </Link>
            <Link to='/'>Bioestimulador de Colágeno</Link>
            <Link to='/'>Microagulhamento</Link>
          </div>
          <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Tratamentos Corporais</h2>
            <Link to='/'>Celulite</Link>
            <Link to='/'>Microagulhamento</Link>
            <Link to='/'>Drenagem Linfatica</Link>
            <Link to='/'>Massagem Modeladora</Link>
            <Link to='/'>Estrias</Link>
            <Link to='/'>Gordura Localizada</Link>
            <Link to='/'>Obesidade/Emagrecimento/Dieta</Link>
            <Link to='/'>Plataforma Vibratoria</Link>
            <Link to='/'>Radiofrequencia</Link>
            <Link to='/'>Ultrassom</Link>
          </div>
          
        </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              PRÓ-VIDA
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>PRÓ-VIDA © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;