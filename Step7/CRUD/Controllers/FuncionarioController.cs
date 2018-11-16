using CRUD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CRUD.Controllers
{
    //
    public class FuncionarioController : Controller
    {
        private object listenCOADCORP;
        #region método para listar Funcionários - READ


        public JsonResult GetFuncionario()
        {
            using (var db = new COADCORPEntities())
            {
                List<Funcionario> listarCOADCORP = db.Funcionarios.ToList();

                return Json(listenCOADCORP, JsonRequestBehavior.AllowGet);
            }
            
        }
        #endregion

        
    }
}