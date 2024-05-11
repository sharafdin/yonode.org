import Link from "next/link";
import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

export default {
  title: "Loved by tech people",
  items: [
    {
      name: "Duraan Ali",
      description: "Software Engineer, Founder & Mentor",
      avatar: "https://avatars.githubusercontent.com/u/16447314?v=4",
      children: (
        <>
          "Yonode has been a catalyst for a transformative shift in our server
          development. It has empowered us to prioritize essential business
          logic while making substantial reductions in development hours. As a
          result, our server infrastructure stands as a testament to modernity
          and efficiency, all thanks to the game-changing impact of Yonode."
          {
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Link
                style={{ marginRight: "18px" }}
                href={"https://github.com/duraanali"}
              >
                {<FaGithub size={"20px"} />}
              </Link>
              <Link
                style={{ marginRight: "18px" }}
                href={"https://twitter.com/duraanali522"}
              >
                {<FaTwitter size={"20px"} />}
              </Link>
              <Link
                style={{ marginRight: "18px" }}
                href={"https://www.youtube.com/duraanali"}
              >
                {<FaYoutube size={"20px"} />}
              </Link>
            </div>
          }
        </>
      ),
    },
    {
      name: "Nizar",
      description: "Software Engineer, YouTuber",
      avatar: "https://avatars.githubusercontent.com/u/140507264?v=4",
      children: (
        <>
          “Yonode transformed our development process, providing the freedom to
          prioritize essential business logic. It significantly slashed
          development hours, expediting the creation of a cutting-edge and
          highly efficient server infrastructure”
          {
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Link
                style={{ marginRight: "18px" }}
                href={"https://github.com/NizarAbiZaher"}
              >
                {<FaGithub size={"20px"} />}
              </Link>
              <Link
                style={{ marginRight: "18px" }}
                href={"https://twitter.com/NizzyABI"}
              >
                {<FaTwitter size={"20px"} />}
              </Link>
              <Link
                style={{ marginRight: "18px" }}
                href={"https://www.youtube.com/@NizzyABI"}
              >
                {<FaYoutube size={"20px"} />}
              </Link>
            </div>
          }
        </>
      ),
    },
    {
      name: "Mohammed Amin",
      description: "Frontend Engineer",
      avatar: "",
      children: (
        <>
          "Yonode has been a game-changer for our server development. It
          empowered us to focus on core business logic while dramatically
          reducing development hours. Our server infrastructure is now modern
          and efficient, thanks to Yonode's impact."
        </>
      ),
    },
  ],
};
