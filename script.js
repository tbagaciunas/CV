document.addEventListener('DOMContentLoaded', function () {
    const skillsProg = document.querySelectorAll('.skills-prog li[data-percent]');
    const skillsSoft = document.querySelectorAll('.skills-soft li[data-percent]');

    skillsProg.forEach(skill => {
        const percent = skill.getAttribute('data-percent');
        const progressBar = skill.querySelector('.skills-bar .bar');
        progressBar.style.width = percent + '%';
    });

    skillsSoft.forEach(skill => {
        const percent = skill.getAttribute('data-percent');
        const progressBar = skill.querySelector('.cbar');
        progressBar.style.strokeDashoffset = 283 - (percent / 100) * 283;
    });
});
