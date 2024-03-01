
import './style.css'

export default function About(){

    return (
        <div>
            <p>
                I am a computer science student, with interest in cybersecurity and web development.
                Some of my skills include malware analysis certified by tcm security.
            </p>
            <p>
                Here are my socials and certificates:
            </p>
            

            <ol className="icons-list">
                <li>
                    <a href="https://www.credential.net/a1068fe5-0aa2-4ea7-a594-bb158d2a66ba"> 
                        <img src="blog/images/tcm-logo.png"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/aantola">
                        <img src="blog/images/github.png" alt="github" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/andrés-nahuel-antola-10ab55161">
                        <img src="blog/images/linkedin.jpg" alt="linkedin" />
                    </a>
                </li>

            </ol>

            

        </div>
    )
}   