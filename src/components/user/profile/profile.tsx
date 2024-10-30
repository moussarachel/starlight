import Header from "./header";
import Information from "./information";
import profile from "@/public/mock/placeholderpic.webp";

const Profile = () => {
  return (
    <div className="h-full w-11/12">
      <Header
        name="Andrew Khadder"
        email="placeholder@ucr.edu"
        github="Andrewk1"
        discord="Andrewk1"
        status="Returning"
        profile={profile}
        projects={["ACM", "UCR", "testtestesttest"]}
      />
      <Information />
    </div>
  );
};

export default Profile;
