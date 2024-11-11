

export default function Login() {
  return (
    <div className="bg-slate-600 w-full h-full p-1 flex flex-col items-center overflow-scroll">
      <div className="flex items-center pb-4">
        <img src="/images/logo-green.png" alt="logo" className="pr-2" />
        <b className="text-md">Fund Care</b>
      </div>
      <b className="pb-2">Join the Fund Care Community</b>
      <p className="text-center w-3/4 text-smd">
        Create an account to support health causes, connect with professionals,
        or fund your community's healthcare projects.
      </p>
    </div>
  );
}
