export const SigninComponent=function(){

    return <div className="h-screen  justify-center flex flex-col">
    <div className="flex justify-center ">
   <a href="#" className="block max-w-sm p-6 bg-white boder border-gray-200
   rounded-lg shadow ">
   <div>
    <div className="px-10">
      <div className="text-3xl font-extrabold">
        Sign in
      </div>
    </div>
    <div className="pt-2">
      <LabelledInput label="Email" placeholder="example@gmail.com"/>
      <LabelledInput label="Password" type={"password"} placeholder="123456"/>

      
    </div>
   </div>
   </a>
    </div>
  </div>
  }

  interface LabelledInputType{
    label:string ;
    placeholder:string;
    type?:string;
   }

    function LabelledInput({ label , placeholder,type } : LabelledInputType) {
        return  <div>
        <label className=" block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input type="text" id='firstName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
    } 