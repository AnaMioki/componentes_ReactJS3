import React from 'react';

const ImageGallery = ({ images }) => (
  <div>
    {images.map((img, i) => <img key={i} src={img.url} alt={img.altText} />)}
  </div>
);

const TextoAlternativo = () => (
  <div>
    <h1>Galeria de Imagens</h1>
    <ImageGallery images={[
      { url: 'https://file:///C:/Users/Aluno/OneDrive%20-%20SENAC%20-%20SP/Imagens/Imagens%20da%20C%C3%A2mera/WIN_20241028_14_59_53_Pro.jpg.com/image1.jpg', altText: 'Descrição 1' },
      { url: 'https://example.com/file:///C:/Users/Aluno/OneDrive%20-%20SENAC%20-%20SP/Imagens/Imagens%20da%20C%C3%A2mera/WIN_20241028_14_59_53_Pro.jpg.jpg', altText: 'Descrição 2' },
      { url: 'https://file:///C:/Users/Aluno/OneDrive%20-%20SENAC%20-%20SP/Imagens/Imagens%20da%20C%C3%A2mera/WIN_20241028_14_59_53_Pro.jpg.com/image3.jpg', altText: 'Descrição 3' },
    ]} />
  </div>
);

export default TextoAlternativo