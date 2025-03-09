<script>
  export let name;
  export let message;
  export let image;
</script>

<div class="testimonial">
  <img src={image} alt={name} class="avatar" />
  <p class="message">"{message}"</p>
  <h3 class="name">- {name}</h3>
</div>

<style>
  .testimonial {
    max-width: 400px;
    padding: 20px;
    margin: 20px auto;
    border-radius: 10px;
    background: #f9f9f9;
    text-align: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .message {
    font-style: italic;
    color: #555;
  }
  .name {
    margin-top: 10px;
    font-weight: bold;
    color: #333;
  }
</style>
