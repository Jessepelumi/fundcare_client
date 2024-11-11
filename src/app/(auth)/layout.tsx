export default function AuthLayot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="h-screen flex">
      <article className="w-1/2 p-2">
        <div className="bg-auth-background bg-cover bg-center bg-no-repeat h-full text-white px-10 py-28 rounded-xl">
          <img src="/images/logo.png" alt="logo" className="pb-5" />
          <h1 className="text-5xl pb-5">Empowering Health, Enabling Impact</h1>
          <p className="w-4/5">
            Support life-changing health initiatives and connect with
            like-minded donors, healthcare professionals, and organizations
            committed to transparent, impactful change.
          </p>
        </div>
      </article>
      <aside className="w-1/2 p-20 flex justify-center items-center ">
        {children}
      </aside>
    </section>
  );
}
