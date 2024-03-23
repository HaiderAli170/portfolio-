
interface ProfileData {
  name: string;
  description: string;
}

function Profile({ data }: { data: ProfileData,}) {
 
  
  return (
    <>
      <div className="mt-4">
        <h1 className="text-3xl font-bold font-poppin text-white tracking-wide   sm:text-3xl">
          {data.name}
          
        </h1>
      </div>
      <section aria-labelledby="information-heading" className="mt-2">
        <div className="mt-2 space-y-2">
          <p className="text-base font-poppin tracking-wide text-gray-400">{data.description}</p>
        </div>
      </section>
    </>
  );
}

export default Profile;
