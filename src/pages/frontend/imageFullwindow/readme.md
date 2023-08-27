   # // JSX nos permite escrever HTML diretamente no código JavaScript.
   # // função que retorna elementos HTML
   # const renderPhotos = (selectedFiles) => {
   #    return selectedFiles.map((photo) => {
   #         return <img src={photo} alt="" key={photo} width="100px" height="100px" />;
   #     });
   # };