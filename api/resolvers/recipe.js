async function user (root) {
    return root.getUser();
}

module.exports = {
    user,
}