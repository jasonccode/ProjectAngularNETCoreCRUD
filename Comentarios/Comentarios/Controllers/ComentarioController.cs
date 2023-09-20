using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Comentarios.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Comentarios.Controllers
{
  [Route("api/[controller]")]
  public class ComentarioController : Controller
  {
    private readonly AplicationDbContext _context;

    public ComentarioController(AplicationDbContext context)
    {
      _context = context;
    }



    // GET: api/values
    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var listComentarios = await _context.Comentario.ToListAsync();
        return Ok(listComentarios);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
      try
      {
        var comentario = await _context.Comentario.FindAsync(id);

        if (comentario == null)
        {
          return NotFound();
        }

        return Ok(comentario);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // POST api/values
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Comentario comentario)
    {
      try
      {
        _context.Add(comentario);
        await _context.SaveChangesAsync();

        return Ok(comentario);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, [FromBody] Comentario comentario)
    {
      try
      {
        if (id != comentario.Id)
        {
          return BadRequest();
        }

        _context.Update(comentario);
        await _context.SaveChangesAsync();
        return Ok(new { message = "Comentariio actualizado con exito!" });

      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
      try
      {
        var comentario = await _context.Comentario.FindAsync(id);
        
        if (comentario == null)
        {
          return NotFound();
        }
        _context.Comentario.Remove(comentario);

        await _context.SaveChangesAsync();

        return Ok(new { message = "Comentario eliminado con exito!" });
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }
  }
}

