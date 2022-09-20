// export default function importAll(r) 
// {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }
  
//   const images = importAll(require.context('F:/cdac2022/Project/Backend/OnlineArtGallery/images', false, /\.(png|jpe?g|svg)$/));
  
//   <img src={images['2_3.jpg']} />