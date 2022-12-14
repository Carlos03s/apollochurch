import * as React from "react";
import { MainContainer } from "./container/donors_and_collaborators_design";

export default function Donors_and_collaborators() {
  return (
    <MainContainer>
      <div className="tables">
        <div className="table_container_">
          <div className="head">
            <p>Lista de doadores</p>
            <select name="test" id="test">
              <option value="ordered_by_az" selected>
                {" "}
                Ordem de A-Z
              </option>
              <option value="ordered_by_za">Ordem de Z-A</option>
            </select>
          </div>
          <div className="search_container">
            <svg viewBox="0 0 100 100" enable-background="new 0 0 100 100">
              <path d="M40.575,16.837c-12.892,0-23.379,10.488-23.379,23.38c0,12.891,10.487,23.379,23.379,23.379   c5.461,0,10.487-1.887,14.471-5.037l24.816,24.817c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586   c0.781-0.78,0.781-2.048,0-2.828L57.966,55.822c3.721-4.142,5.989-9.613,5.989-15.605C63.955,27.325,53.467,16.837,40.575,16.837z    M21.196,40.217c0-10.686,8.693-19.38,19.379-19.38c10.687,0,19.38,8.694,19.38,19.38c0,5.396-2.221,10.279-5.791,13.795   c-0.175,0.092-0.342,0.202-0.488,0.349c-0.105,0.105-0.194,0.222-0.271,0.343c-3.422,3.033-7.907,4.893-12.829,4.893   C29.89,59.596,21.196,50.902,21.196,40.217z" />
              <path d="M40.748,25.428c-8.25,0-14.962,6.712-14.962,14.962c0,1.104,0.896,2,2,2s2-0.896,2-2c0-6.044,4.918-10.962,10.962-10.962   c1.104,0,2-0.896,2-2S41.853,25.428,40.748,25.428z" />
            </svg>
            <input
              type="search"
              name=""
              id=""
              placeholder="Faça uma pesquisa"
            />
          </div>
          <table>
            {/* ----- EXAMPLE TABLE DATA ----- */}
            <tr>
              <td>
                <p>Nome</p>
              </td>
              <td>
                <p>email.quenteemail@hotmail.com</p>
              </td>
              <td>
                <p>19 987654321</p>
              </td>
              <td>
                <button className="more_options">
                  <svg
                    viewBox="0 0 100 100"
                    enable-background="new 0 0 100 100"
                  >
                    <path d="M30.183,50.762c0-6.264-5.095-11.359-11.356-11.359c-6.261,0-11.354,5.096-11.354,11.359   c0,6.259,5.094,11.352,11.354,11.352C25.088,62.113,30.183,57.021,30.183,50.762z M11.472,50.762c0-4.058,3.299-7.359,7.354-7.359   c4.057,0,7.356,3.302,7.356,7.359c0,4.054-3.3,7.352-7.356,7.352C14.771,58.113,11.472,54.815,11.472,50.762z" />
                    <path d="M61.355,50.762c0-6.264-5.095-11.359-11.356-11.359c-6.261,0-11.354,5.096-11.354,11.359   c0,6.259,5.094,11.352,11.354,11.352C56.261,62.113,61.355,57.021,61.355,50.762z M49.999,58.113c-4.056,0-7.354-3.298-7.354-7.352   c0-4.058,3.299-7.359,7.354-7.359c4.057,0,7.356,3.302,7.356,7.359C57.355,54.815,54.056,58.113,49.999,58.113z" />
                    <path d="M81.172,39.402c-6.262,0-11.355,5.096-11.355,11.359c0,6.259,5.094,11.352,11.355,11.352s11.356-5.093,11.356-11.352   C92.528,44.498,87.434,39.402,81.172,39.402z M81.172,58.113c-4.056,0-7.355-3.298-7.355-7.352c0-4.058,3.3-7.359,7.355-7.359   c4.057,0,7.356,3.302,7.356,7.359C88.528,54.815,85.229,58.113,81.172,58.113z" />
                  </svg>
                </button>
              </td>
            </tr>
          </table>
        </div>
        <div className="table_container_">
          <div className="head">
            <p>Lista de colaboradores</p>
            <select name="test" id="test">
              <option value="ordered_by_az" selected>
                {" "}
                Ordem de A-Z
              </option>
              <option value="ordered_by_za">Ordem de Z-A</option>
            </select>
          </div>
          <div className="search_container">
            <svg viewBox="0 0 100 100" enable-background="new 0 0 100 100">
              <path d="M40.575,16.837c-12.892,0-23.379,10.488-23.379,23.38c0,12.891,10.487,23.379,23.379,23.379   c5.461,0,10.487-1.887,14.471-5.037l24.816,24.817c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586   c0.781-0.78,0.781-2.048,0-2.828L57.966,55.822c3.721-4.142,5.989-9.613,5.989-15.605C63.955,27.325,53.467,16.837,40.575,16.837z    M21.196,40.217c0-10.686,8.693-19.38,19.379-19.38c10.687,0,19.38,8.694,19.38,19.38c0,5.396-2.221,10.279-5.791,13.795   c-0.175,0.092-0.342,0.202-0.488,0.349c-0.105,0.105-0.194,0.222-0.271,0.343c-3.422,3.033-7.907,4.893-12.829,4.893   C29.89,59.596,21.196,50.902,21.196,40.217z" />
              <path d="M40.748,25.428c-8.25,0-14.962,6.712-14.962,14.962c0,1.104,0.896,2,2,2s2-0.896,2-2c0-6.044,4.918-10.962,10.962-10.962   c1.104,0,2-0.896,2-2S41.853,25.428,40.748,25.428z" />
            </svg>
            <input
              type="search"
              name=""
              id=""
              placeholder="Faça uma pesquisa"
            />
          </div>
          <table>
            {/* ----- EXAMPLE TABLE DATA ----- */}
            <tr>
              <td>
                <p>Nome</p>
              </td>
              <td>
                <p>emai.quenteemail@hotmail.com</p>
              </td>
              <td>
                <p>19 987654321</p>
              </td>
              <td>
                <button className="more_options">
                  <svg
                    viewBox="0 0 100 100"
                    enable-background="new 0 0 100 100"
                  >
                    <path d="M30.183,50.762c0-6.264-5.095-11.359-11.356-11.359c-6.261,0-11.354,5.096-11.354,11.359   c0,6.259,5.094,11.352,11.354,11.352C25.088,62.113,30.183,57.021,30.183,50.762z M11.472,50.762c0-4.058,3.299-7.359,7.354-7.359   c4.057,0,7.356,3.302,7.356,7.359c0,4.054-3.3,7.352-7.356,7.352C14.771,58.113,11.472,54.815,11.472,50.762z" />
                    <path d="M61.355,50.762c0-6.264-5.095-11.359-11.356-11.359c-6.261,0-11.354,5.096-11.354,11.359   c0,6.259,5.094,11.352,11.354,11.352C56.261,62.113,61.355,57.021,61.355,50.762z M49.999,58.113c-4.056,0-7.354-3.298-7.354-7.352   c0-4.058,3.299-7.359,7.354-7.359c4.057,0,7.356,3.302,7.356,7.359C57.355,54.815,54.056,58.113,49.999,58.113z" />
                    <path d="M81.172,39.402c-6.262,0-11.355,5.096-11.355,11.359c0,6.259,5.094,11.352,11.355,11.352s11.356-5.093,11.356-11.352   C92.528,44.498,87.434,39.402,81.172,39.402z M81.172,58.113c-4.056,0-7.355-3.298-7.355-7.352c0-4.058,3.3-7.359,7.355-7.359   c4.057,0,7.356,3.302,7.356,7.359C88.528,54.815,85.229,58.113,81.172,58.113z" />
                  </svg>
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </MainContainer>
  );
}
