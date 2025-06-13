import React from 'react';
import Logo from './Logo';
import FooterBackground from './FooterBackground';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-white text-sm pt-20">
        <FooterBackground /> 
        <div className="container footer-top relative z-10">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* COLUNA 1 - LOGO E TEXTO */}
          <div className="footer-about">
            <a href="/" className="logo flex items-center mb-4">
              <Logo height={40} />
              <span className="sitename ml-2 font-bold">GLMMMRJ</span>
            </a>
            <div className="footer-contact pt-2">
              <p>
                Grande Loja de Mestres da Marca do Estado do Rio de Janeiro<br />
                Promovendo os valores maçônicos e o aperfeiçoamento dos Mestres Maçons desde 2004.
              </p>
            </div>
            <div className="social-links flex mt-4 space-x-4">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          {/* COLUNA 2 - CONTATO */}
          <div className="footer-links">
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <p>
              📧 <a href="mailto:contato@grmmrj.org.br">contato@grmmrj.org.br</a><br />
              📞 <a href="https://wa.me/55999417097" target="_blank">Clique para WhatsApp</a><br />
              📍 Rua do México, 119 Sl. 802<br />
              Centro - Rio de Janeiro, RJ
            </p>
          </div>

          {/* COLUNA 3 - LINKS RÁPIDOS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos:</h4>
            <ul className="space-y-2">
              <li><a href="#quem-somos" className="hover:text-yellow-300">Quem Somos</a></li>
              <li><a href="#historia" className="hover:text-yellow-300">História</a></li>
              <li><a href="#junte-se" className="hover:text-yellow-300">Junte-se a Nós</a></li>
              <li><a href="#autoridades" className="hover:text-yellow-300">Autoridades</a></li>
            </ul>
          </div>

          {/* COLUNA 4 - OUTROS ACESSOS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Outros Acessos:</h4>
            <ul className="space-y-2">
              <li><a href="#galeria" className="hover:text-yellow-300">Galeria</a></li>
              <li><a href="contact.html" className="hover:text-yellow-300">Fale Conosco</a></li>
            </ul>
          </div>

        </section>

        <div className="mt-10 border-t border-green-800 pt-6 text-center text-xs text-gray-400">
          <p>© <span id="anoAtual"></span> GLMMMRJ – Todos os direitos reservados.</p>
          <p className="mt-2">
            Desenvolvido por MMM Mosán-Santos • <a href="https://wa.me/55999417097" target="_blank" className="hover:text-yellow-300 underline">CONTATO</a>
          </p>
        </div>
      </div>

      {/* BOLHAS ANIMADAS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="bubble" style={{ left: '20%', animationDelay: '0s' }}></div>
        <div className="bubble" style={{ left: '30%', animationDelay: '2s' }}></div>
        <div className="bubble" style={{ left: '40%', animationDelay: '4s' }}></div>
        <div className="bubble" style={{ left: '50%', animationDelay: '5s' }}></div>
        <div className="bubble" style={{ left: '65%', animationDelay: '3s' }}></div>
        <div className="bubble" style={{ left: '80%', animationDelay: '1s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;
