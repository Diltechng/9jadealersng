import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useState, useRef, useEffect} from 'react';
import { GoFileMedia } from "react-icons/go";
import { FaQuestion, FaPencilAlt, FaPlusCircle } from "react-icons/fa";
import { MdOutlineSaveAs } from "react-icons/md";
import { VscSmiley } from "react-icons/vsc";
import {Link, useNavigate} from 'react-router-dom';
import ProfileThumb from '../../funtctionalComp/ProfileThumb';
import useDeviceType from '../../Hooks/Devicewidthhook';
import useAuthHook from '../../Hooks/AuthState';
const defaultValues = null;

export const CreateGroup = () =>{
  //modal
        const [show, setShow] = useState(false);
        const [smShow, setSmShow] = useState(false);
        const navigate = useNavigate();
        const {currentUser} = useAuthHook();
        const handleShow = () =>{ 
          currentUser ? (setShow(true)) : navigate('/SignIn')
        }
        const [text, setText] = useState("");
        const textareaRef = useRef(null);
        const {isMobile, isDesktop, isTablet} = useDeviceType();
        const resetField = () =>{
            setText(defaultValues);
        }
        const handleSubmit = async(event)=>{
            event.preventDefault()
        }
        const handleClose = () =>{
            setShow(false);
            resetField();
            setSmShow(false);
        } 
        useEffect(() =>{
            if(textareaRef.current){
                textareaRef.current.style.height = "auto";
                textareaRef.current.style.height =`${textareaRef.current.scrollHeight}px`
            }
        }, [text])
        const handleChange = (e) => {
            setText(e.target.value);
        };
  return (
    <>
  <span className="bg-light rounded-circle shadow-lg position-fixed" style={{
        bottom: 80,
        right: 20,
        width: 60,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        }}><FaPlusCircle size={40} onClick={handleShow} /></span>

      <Modal show={show} onHide={() => !text ? setShow(false) : setSmShow(true)}>
      <Form onSubmit={handleSubmit} >
        <Modal.Header className="d-flex justify-content-between">
        <Modal.Title><ProfileThumb/></Modal.Title>
        <Form.Select className="w-50 rounded" aria-label="Select" required>
      <option>Category</option>
      <option value="1">Automobile</option>
      <option value="2">Real Estate</option>
      <option value="3">Phones</option>
    </Form.Select>
          <Link className="text-secondary" to='/'><li className='btn d-flex p-2  justify-content-center'>Drafts</li></Link>
          <Button variant='none' onClick={() =>{ if(text){
            setSmShow(true)
        }else{handleClose()} } }className="btn me-2">X
      </Button>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control className="w-50" type="text" size="sm" placeHolder="Group Name" />
        <Form.Control 
        as="textarea" 
        ref ={textareaRef}
        value={text}
        onChange={handleChange} 
        className="post w-100 shadow-none"
        name ="textarea"
        style={{
            overflow: 'hidden',
            border: 'none',
            resize: 'none',
            lineHeight: 2}}
        placeHolder="Group Description"
        rows={1} 
        />
         <Form.Control className="w-50" type="image" size="sm" placeHolder="Group Image" />
      </Form.Group>
        <div className="post thumbnails">
            <img src="#"/>
        </div>
        </Modal.Body>
        <Modal.Footer className="d-flex flex-nowrap">
            <div className="d-flex justify-content-around w-50">
          <Button type="submit" variant="secondary" onClick={handleClose}>
            Create
          </Button>
          </div>
        </Modal.Footer>
        </Form>
      </Modal>
      {/*dialogue modal*/}
      <Modal
      className="m-3"
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-sm">
            Save as Draft?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <span className="w-100 d-flex justify-content-center m-2">
        <Button variant="secondary" type="submit">
            Save as Draft <MdOutlineSaveAs/>
          </Button>
          </span>
          <span className="w-100 d-flex justify-content-center m-2">
          <Button variant="danger" onClick={handleClose}>
            Discard
          </Button>
          </span>
        </Modal.Body>
      </Modal>
    </>
    )
}
