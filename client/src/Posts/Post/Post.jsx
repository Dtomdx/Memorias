import Memorias from "../../images/Libros.jpg";

const Post = ({post}) => {
  
  return (
    <div className={`md:col-span-1 lg:row-span-2  rounded-2xl shadow-xl relative bg-red-400`}>
      <div className={`flex flex-col `}>
        <div className={`h-1/2 relative`}>
          <img src={Memorias} alt="" className={`bg-gray-950 bg-opacity-50 mix-blend-darken object-center h-48 w-full rounded-t-2xl`}/>
          <div className={`absolute top-5 left-5 text-white`}>
            <p>
              {post.name}
            </p>
            <p>
              hace 2 min
            </p>
          </div>
        </div>
        <div className={`h-1/2`}>
          <p className={`mt-2`}>
            #navidad
          </p>
          <p className={`mt-4`}>
            Ttitulo de imagen
          </p>
          <p className={`mt-4`}>
            Mensaje de titulo
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Post;
