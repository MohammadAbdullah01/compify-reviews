import './Blogs.css'
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
const Blogs = () => {

    return (
        <Container style={{ minHeight: "78vh" }}>
            <div className='answer'>
                <h3>What is semantic tag <FontAwesomeIcon icon={faQuestion} /> </h3>
                <p>HTML5 এ semantic tag হলো ওই সমস্ত tag যেগুলো দিয়ে কোন element webpage এ প্রদর্শন করার পাশাপাশি ওই element তৈরির উদ্দেশ্য নির্দেশ করে। যেমন শুধু <kbd>span</kbd> বা <kbd>div</kbd> দিয়ে কোন element create করলে tag এর ভেতরের element টা webpage এ কোন purpose e create করা হয়েছে তা স্পষ্ট করে না। কিন্তু <kbd>article</kbd> <kbd>main</kbd> <kbd>section</kbd> <kbd>footer</kbd> ইত্যাদি tag গুলো ভেতরের element টা কি এবং কেন create করা হয়েছে তা দেখলে সহজেই বোধগম্য হয়। এছাড়াও semantic tag সহজেই page এর layout কে নির্দেশ করে। semantic tag use করার ফলে search engine এর কাছে ওই নির্দিষ্ট information ওয়ালা page খুঁজে পেতে সাহায্য করে।
                </p>
            </div>
            <div className='answer'><h3>What is context API <FontAwesomeIcon icon={faQuestion} /></h3>
                <p>React App এ Context API  দিয়ে data grandparent থেকে children, grandchildren এ props drilling এর মাদ্ধমে না পাঠিয়ে অতি সহজেই পাঠানো যায়। props drilling করলে global variable গুলো তার অতি ভিতরের child এ pass করতে হলে ভেতরের সব component এর props এর via হয়ে আসতে হয়, কিন্তু Context API use করলে global variable যেখানে রাখবো সেখানে Context Create করতে হয় এবং Provider এর সাহায্যে ভেতরের component গুলোর জন্য variable গুলো access দেয়া হয় এবং ভেতরের যে কোন component থেকে props drilling ছাড়াই use করা যায়।</p>
            </div>
        </Container>
    );
};

export default Blogs;